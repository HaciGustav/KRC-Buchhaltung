import { createMail } from "@/utils/email_service";
import formidable from "formidable";

const nodemailer = require("nodemailer");
const allowCors = (fn) => async (req, res) => {
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*");
  // another common pattern
  res.setHeader("Access-Control-Allow-Origin", req.headers.origin);
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }
  return await fn(req, res);
};

export const config = {
  api: {
    bodyParser: false, // Important: Disable default Next.js body parser
  },
};

const handleFormData = async (req, res) => {
  const form = formidable({ multiples: true });

  const formData = new Promise((resolve, reject) => {
    form.parse(req, async (err, fields, files) => {
      if (err) {
        reject("error");
      }
      resolve({ fields, files });
    });
  });

  try {
    const { fields, files } = await formData;

    try {
      form.uploadDir = "./public/uploads"; // Temporary storage
      form.keepExtensions = true; // Keep file extensions

      const attachments = Object.values(files)
        .flat()
        .map((file) => ({
          filename: file.originalFilename,
          path: file.filepath,
        }));

      return { fields, files, attachments };
    } catch (e) {
      console.log({ ERROR: e });
      return;
    }
  } catch (e) {
    console.log({ ERROR: e });
    return;
  }
};

const handler = async (req, res) => {
  const formData = req.body;

  const { fields, attachments } = await handleFormData(req);
  const receiver = fields.email;

  const subject = `Anmeldung: ${fields.employer} - ${fields.firstnameDN} ${fields.lastnameDN}`;
  const message = createMail(
    "anmeldung",
    receiver,
    subject,
    "Empfangsbestätigung",
    fields
  );
  message.attachments = attachments;
  let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  if (req.method === "POST") {
    transporter.sendMail(message, (err, info) => {
      if (err) {
        console.log(err);
        console.log(err.message);
        res.status(400).json({
          error: [err.response, err.message],
        });
      } else {
        res.status(250).json({
          success: `Message delivered to ${info.accepted}`,
        });
      }
    });
  }
};
export default allowCors(handler);
