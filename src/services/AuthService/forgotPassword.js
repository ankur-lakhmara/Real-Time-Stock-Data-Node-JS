const crypto = require("crypto");
const transporter = require("../maileService/configEmail");
const OTP = require("../../models/otpModel");
const user = require("../../models/user");
const bcrypt = require("bcrypt");

const sendForgotPasswordEmail = async (email) => {
  const isEmailExist = await user.findOne({ email });
  if (!isEmailExist) {
    return { success: false, message: "Email not exist !" };
  }
  const otp = crypto.randomInt(100000, 999999);

  //defining mail options
  const mailOptions = {
    from: process.env.Email_username,
    to: email,
    subject: "Password Reset OTP",
    text: `Your OTP for password reset is ${otp}. this OTP will expires in 10 Minutes 
        Thanks !`,
  };

  //sending email
  try {
    await transporter.sendMail(mailOptions);
    const newOtp = new OTP({ email, otp });
    await newOtp.save();
    return { success: true, message: `Otp send to ${email} otp is ${otp}` };
  } catch (err) {
    return { success: false, message: err.message };
  }
};

//service for veryfying the OTP and reseting the password
const verifyOtpAndUpdatePassword = async (email, otp, newPassword) => {
  try {
    const otpRecord = await OTP.findOne({ email, otp });

    if (!otpRecord) {
      return { success: false, message: "Invalid or expired OTP" };
    }
    //hash the password
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    //setting new password
    await user.updateOne({ email }, { $set: { password: hashedPassword } });
    //deleting the otp from OTP record
    await OTP.deleteOne({ email });
    return { success: true, message: "Password reset successfull" };
  } catch (err) {
    return { success: false, message: err.message };
  }
};
module.exports = { sendForgotPasswordEmail, verifyOtpAndUpdatePassword };
