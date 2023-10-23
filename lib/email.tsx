import nodemailer from "nodemailer";

const Email = "maxzerovol@mail.ru";
const pass = "89267526012Max";

export const transporter = nodemailer.createTransport({
  host: "phonex@megatel.ru",
  port: 3000,
  secure: false, // upgrade later with STARTTLS
  auth: {
    user: Email,
    pass: pass,
  },
});

export const mailOptions: { from: string; to: String } = {
  from: Email,
  to: Email,
};
