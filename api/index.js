const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors")({ origin: true });

const app = express();

const transporter = nodemailer.createTransport({
    service: "Outlook",
    auth: { user: process.env.EMAIL, pass: process.env.PASSWORD },
});

// let mailOptions = {
// from: 'Arc Development',
// to: 'tousifislampersonal@outlook.com',
// subject: 'Testing nodemailer',
// text: 'Test successful',
// };

app.get("/api", (req, res) => {
    const path = `/api/sendmail`;
    res.setHeader("Content-Type", "text/html");
    res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
    res.end(`Hello! Go to item: <a href="${path}">${path}</a>`);
});

app.post("/api/sendmail", (req, res) => {
    cors(req, res, () => {
        const { name, email, phone, message } = req.body;

        let mailOptions = {
            from: "Arc Development",
            to: "tousif101@outlook.com",
            subject: "Message received",
            html: `
                <p style="font-size: 16px">From: ${name}</p>
                <p style="font-size: 16px">Email: ${email}</p>
                <p style="font-size: 16px">Phone: ${phone}</p>
                <p style="font-size: 16px">Message: ${message}</p>
            `,
        };

        transporter.sendMail(mailOptions, (error) => {
            if (error) {
                res.status(204).send(error);
            } else {
                res.status(200).send("Message sent successfully");
            }
        });

        mailOptions = {
            from: "Arc Development",
            to: email,
            subject: "We have received your message",
            html: `
                <p style="font-size: 16px">From: ${name}</p>
                <p style="font-size: 16px">Email: ${email}</p>
                <p style="font-size: 16px">Phone: ${phone}</p>
                <p style="font-size: 16px">Message: ${message}</p>
            `,
        };
    });
});

app.get("/api/hello", (req, res) => {
    res.status(200).json({
        message: "Hello from Vercel serverless function",
    });
});

app.all("/api/*", (req, res) => {
    res.status(404).json({
        status: "fail",
        message: "Route does not exist",
    });
});

module.exports = app;
