'use server';

import { sendEmail } from "@/lib/mailer";
import OpenAI from "openai";

const openai = new OpenAI({
    baseURL: "https://openrouter.ai/api/v1",
    apiKey: process.env.OPENROUTER_API_KEY,
    defaultHeaders: {
        "HTTP-Referer": "https://www.stellux.org",
        "X-Title": "https://www.stellux.org",
    },
});

async function generateSubject(message: string) {
    const completion = await openai.chat.completions.create({
        model: "openai/gpt-oss-20b:free",
        messages: [
            {
                role: "developer",
                content: "You are an assistant that reads the full body of an email and generates a clear, concise subject line. The subject should be about 10 words or fewer, capture the main purpose or topic of the email, and be written in a professional and natural tone. Avoid filler words, excessive detail, or vague phrasing. Do not repeat the exact first sentence of the email. Your output should ONLY be the subject line, with no explanations or extra text."
            },
            {
                role: "user",
                content: message,
            }
        ],
    });
    
    return completion.choices[0].message.content;
}

export async function sendContactEmail(formData: FormData) {
    try {
        const firstName = formData.get('firstName') as string;
        const lastName = formData.get('lastName') as string;
        const email = formData.get('email') as string;
        const message = formData.get('message') as string;

        if (!firstName || !lastName || !email || !message) {
            return { error: 'All fields are required' };
        }

        if (message.length > 10000) {
            return { error: 'Message must be less than 10000 characters' };
        }

        const subject = await generateSubject(message) || "New Contact Form Message";

        const text = `
            Name: ${firstName} ${lastName}
            Email: ${email}
            Message: ${message}
        `

        const html = `
            <h3>${subject}</h3>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
        `;

        const success = await sendEmail(email, subject, text, html);

        if (success) {
            return { success: 'Email sent successfully' };
        }
        else {
            return { error: 'Failed to send email' };
        }
    } catch (error) {
        console.error('Error sending email:', error);
        return { error: 'Failed to send email' };
    }
}