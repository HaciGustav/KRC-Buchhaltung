import { createMail } from "@/utils/email_service";

const nodemailer = require("nodemailer");

export default function handler(req, res) {
  console.log(req.body);

  const subject = `Storno: ${req.body.employer}`;
  const receiver = req.body.email;
  const formData = req.body;
  const message = createMail(
    "storno",
    receiver,
    subject,
    "Empfangsbestätigung",
    formData
  );

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
        res.status(err.responseCode).json({
          error: err.response,
        });
      } else {
        res.status(250).json({
          success: `Message delivered to ${info.accepted}`,
        });
      }
    });
  }
}
