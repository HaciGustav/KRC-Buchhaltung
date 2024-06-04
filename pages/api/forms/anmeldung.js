import { createMail } from "@/utils/email_service";

const nodemailer = require("nodemailer");

export default function handler(req, res) {
  const message = createMail(
    null,
    "mehmetfkuruldak@gmail.com",
    "TEST-MAIL",
    "TEST-MAIL-TEXT",
    null
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
        res.status(404).json({
          error: `Connection refused at ${err.address}`,
        });
      } else {
        console.log("success");
        res.status(250).json({
          success: `Message delivered to ${info.accepted}`,
        });
      }
    });
  }
}
