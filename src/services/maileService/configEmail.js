const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.Email_HOST,
  port: 587,
  secure: false,
  auth: {
    user: process.env.Email_username,
    pass: process.env.Email_pass,
  },
});
module.exports = transporter;
