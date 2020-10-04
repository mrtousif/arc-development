const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors')({ origin: true });

const app = express();

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: { user: process.env.EMAIL, pass: process.env.PASSWORD },
});

// let mailOptions = {
// from: 'Arc Development',
// to: 'tousifislampersonal@outlook.com',
// subject: 'Testing nodemailer',
// text: 'Test successful',
// };

module.exports = (request, response) => {
    cors(request, response, () => {
        const { name, email, phone, message } = request.body;

        let mailOptions = {
            from: 'Arc Development',
            to: 'tousif101@outlook.com',
            subject: 'Message received',
            html: `
                <p style="font-size: 16px">From: ${name}</p>
                <p style="font-size: 16px">Email: ${email}</p>
                <p style="font-size: 16px">Phone: ${phone}</p>
                <p style="font-size: 16px">Message: ${message}</p>
            `,
        };

        transporter.sendMail(mailOptions, (error) => {
            if (error) {
                response.status(204).send(error);
            } else {
                response.status(200).send('Message sent successfully');
            }
        });

        let mailOptions = {
            from: 'Arc Development',
            to: email,
            subject: 'We have received your message',
            html: `
                <p style="font-size: 16px">From: ${name}</p>
                <p style="font-size: 16px">Email: ${email}</p>
                <p style="font-size: 16px">Phone: ${phone}</p>
                <p style="font-size: 16px">Message: ${message}</p>
            `,
        };
    });
};
