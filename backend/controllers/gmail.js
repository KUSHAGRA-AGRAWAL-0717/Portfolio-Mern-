import nodemailer from "nodemailer";
import dotenv from "dotenv";
import Sender from "../models/sender_m.js";
import createError from "../utils/error.js";

dotenv.config();

export const sendGmail = async (req, res, next) => {
  const { fullname, email, desc, phone } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    secure: true,
    port: 587,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  let mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `New Message from ${fullname}`,
    text: `Description: ${desc}\nPhone: ${phone}`,
  };

  try {
    let info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);

    const newSender = new Sender({
      fullname,
      email,
      phone,
      desc,
    });

    await newSender.save();

    res.status(200).send({
      message: "Your response has been sent to Kushagra and saved.",
      success: true,
    });
  } catch (error) {
    console.error("Error sending email or saving to database:", error);
    return next(createError(400, "Email is not sent"));
  }
};
