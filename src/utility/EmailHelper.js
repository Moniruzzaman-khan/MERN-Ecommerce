const nodemailer = require('nodemailer');
const path = require('path');

const EmailSend= async (EmailTo, EmailText, EmailSubject) => {

    let transporter = nodemailer.createTransport({
        service: 'gamil',
        host: "smtp.gmail.com",
        auth: {
            user: "25monirkhan25@gmail.com",
            pass: "lrjl vkrn zojg stta"
        },
    });


    let mailOptions = {
        from: 'Monir Mart <25monirkhan25@gmail.com>',
        to: EmailTo,
        subject: EmailSubject,
        text: EmailText
    };


    return  await transporter.sendMail(mailOptions)

}
module.exports= EmailSend
