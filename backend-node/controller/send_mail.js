// emailController.js
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'bilalraza9170@gmail.com',
    pass: 'dksl fscs mefk sjbs'
  }
});

exports.sendEmail = ({to, subject, text}) => {
  // const { to, subject, text } = req.body;

  const mailOptions = {
    from: 'bilalraza9170@gmail.com',
    to: to,
    subject: subject,
    text: text
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
}