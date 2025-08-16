import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD
    }
});

export async function sendEmail(from: string, subject: string, text: string, html: string) {
    const mail = {
        from,
        to: "taeminkm@umich.edu",
        subject,
        text,
        html,
    };

    try {
        await transporter.verify();
    }
    catch (error) {
        console.error('Error verifying transporter:', error);
        return false;
    }

    try {
        await transporter.sendMail(mail);
        return true;
    }
    catch (error) {
        console.error('Error sending email:', error);
        return false;
    }
}
    