import nodemailer from 'nodemailer';
import { MailtrapClient } from "mailtrap";

/**
 * For this example to work, you need to set up a sending domain,
 * and obtain a token that is authorized to send from the domain.
 */

// const TOKEN = "<YOUR-TOKEN-HERE>";
// const SENDER_EMAIL = "<SENDER@YOURDOMAIN.COM>";
// const RECIPIENT_EMAIL = "<RECIPIENT@EMAIL.COM>";

async function sendWithTrapMail() {
  const client = new MailtrapClient({ token: 'b342ac29b797a460e09faf770f1d3afd' });

  const sender = { email: 'sender.email.supp@gmail.com' };
  
  try {
    await client
    .send({
      from: sender,
      to: [{ email: 'pozdniakovkyryl@gmail.com' }],
      subject: "Hello from Mailtrap!",
      text: "Welcome to Mailtrap Sending!",
    })
  } catch (error) {
    console.log(error);
  }
}


async function senWithNodemailer() {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'sender.email.supp@gmail.com',
      pass: 'aqpibxwastseofs'
    }
  })

  try {
    const info =  await transporter.sendMail({
      from: 'sender.email.supp@gmail.com', // sender address
      to: "pozdniakovkyryl@gmail.com'", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
    });
  
    console.log(info.messageId);
    
  } catch (error) {
    console.log('error', error)
  }
}

sendWithTrapMail()
senWithNodemailer()
