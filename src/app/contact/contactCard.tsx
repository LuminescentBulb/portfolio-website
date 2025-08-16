'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { sendContactEmail } from "./actions";
import { useState } from "react";

export default function ContactCard() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [messageLength, setMessageLength] = useState(0);
    const MAX_MESSAGE_LENGTH = 10000;

    async function handleSubmit(formData: FormData) {
        setIsSubmitting(true);

        const result = await sendContactEmail(formData);
        if (result.success) {
            alert('Email sent successfully');
        }
        else {
            alert('Failed to send email');
        }
    };
    
    return (
        <Card className="border-0 shadow-lg bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm">
            <CardHeader>
                <CardTitle className="text-2xl font-bold text-slate-900 dark:text-white">
                    Send a Message
                </CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-300">
                    Fill out the form below and I&apos;ll get back to you as soon as possible.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form id="contact-form" action={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                First Name
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="John"
                            />
                        </div>
                        <div>
                            <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                Last Name
                            </label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Doe"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="john@example.com"
                        />
                    </div>


                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                            Message
                        </label>
                        <div className="relative">
                            <textarea
                                id="message"
                                name="message"
                                rows={6}
                                maxLength={MAX_MESSAGE_LENGTH}
                                onChange={(e) => setMessageLength(e.target.value.length)}
                                className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                                placeholder="Tell me about your project or how we can work together..."
                            ></textarea>
                            <div className="absolute bottom-2 right-2 text-xs text-slate-500 dark:text-slate-400">
                                {messageLength}/{MAX_MESSAGE_LENGTH}
                            </div>
                        </div>
                    </div>

                    <Button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-200">
                        <Send className="mr-2 h-4 w-4" />
                        {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                </form>
            </CardContent>
        </Card >
    )
}