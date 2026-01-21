import React from 'react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function SupportPage() {
    const faqs = [
        {
            q: "How do I enroll in a course?",
            a: "Simple! Browse our courses page, select the one you like, and click 'Enroll Now'. You'll be guided through the account creation and payment process."
        },
        {
            q: "Can I get a refund if I'm not satisfied?",
            a: "Yes, we offer a 7-day money-back guarantee for all our self-paced courses. Live cohorts have specific refund policies detailed during checkout."
        },
        {
            q: "Do you offer placement assistance?",
            a: "Absolutely. Our 'Career Acceleration' program includes resume reviews, mock interviews, and direct referrals to our hiring partners."
        },
        {
            q: "Are the certificates recognized?",
            a: "Our certificates are industry-recognized and verifiable. Top tech companies value the rigorous project-based curriculum we follow."
        }
    ];

    return (
        <div className="relative pt-20 pb-32">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                        Support <span className="text-gradient">Center</span>
                    </h1>
                    <p className="text-xl text-gray-400">
                        We're here to help you succeed.
                    </p>
                </div>

                <div className="grid gap-8 mb-16">
                    {faqs.map((faq, i) => (
                        <div key={i} className="glass p-6 rounded-xl">
                            <h3 className="text-lg font-bold text-white mb-2">{faq.q}</h3>
                            <p className="text-gray-400 leading-relaxed">{faq.a}</p>
                        </div>
                    ))}
                </div>

                <div className="glass p-8 rounded-2xl text-center border border-[var(--primary)]/30">
                    <h2 className="text-2xl font-bold text-white mb-4">Still need help?</h2>
                    <p className="text-gray-400 mb-8">我们的 support team is available 24/7 to assist you.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/contact">
                            <Button size="lg">Contact Us</Button>
                        </Link>
                        <a href="mailto:contact@unboundbytesolution.com">
                            <Button variant="outline" size="lg">Email Support</Button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
