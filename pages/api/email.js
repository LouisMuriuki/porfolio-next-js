export default async (req, res) => {
  let nodemailer = require("nodemailer");
  require("dotenv").config();
  const PASSWORD = process.env.password;

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "luihugo7@gmail.com",
      pass: PASSWORD,
    },
    secure: true,
  });

  try {
    // Verify transporter
    await new Promise((resolve, reject) => {
      transporter.verify(function (error) {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });

    // Send email
    const mailData = {
      from: "luihugo7@gmail.com",
      to: "luihugo247@gmail.com",
      subject: `Message from your website by ${req.body.name}`,
      text: req.body.message,
      html: `<div><h3>Sender Email: ${req.body.email}</h3><h4>Sender Phone: ${req.body.phone}</h4><p>${req.body.message}</p></div>`,
    };

    await new Promise((resolve, reject) => {
      transporter.sendMail(mailData, function (err) {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });

    res.status(200).end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
