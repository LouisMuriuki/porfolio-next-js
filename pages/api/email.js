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
  await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log("Server is ready to take our messages");
        resolve(success);
      }
    });
  });
  const mailData = {
    from: "luihugo7@gmail.com",
    to: "luihugo247@gmail.com",
    subject: `Message from your website by ${req.body.name}`,
    text: req.body.message,
    html: `<div>
    <h3 style="">Sender Email: ${req.body.email}</h3>
    <h4>Sender Phone: ${req.body.phone}</h4>
    <p>${req.body.message}</p>
    </div>`,
  };
  await new Promise((resolve, reject) => {
    transporter.sendMail(mailData, function (err, info) {
      if (err) {
        console.log(err.message);
        reject(err);
      } else {
        console.log(info.response);
        resolve(info);
      }
    });
  });
  res.status(200).end();
};
