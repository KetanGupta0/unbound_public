"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        honeypot: '' // Hidden field for spam protection
    });

    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const validateForm = () => {
        if (!formData.name.trim()) return "Name is required";
        if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) return "Valid email is required";
        if (!formData.message.trim()) return "Message cannot be empty";
        return null;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrorMessage('');

        // Spam Check (Honeypot)
        if (formData.honeypot) {
            // Silently fail for bots
            setStatus('success');
            return;
        }

        // Validation
        const error = validateForm();
        if (error) {
            setErrorMessage(error);
            return;
        }

        setStatus('submitting');

        // Simulate API Call & Rate Limiting logic
        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '', honeypot: '' });
        }, 1500);
    };

    return (
        <div className="relative pt-24 pb-32">
            <div className="hero-glow opacity-20"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                        Get in <span className="text-gradient">Touch</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Have a question about our courses? Want to partner with us? We'd love to hear from you.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Contact Form */}
                    <div className="glass p-8 rounded-2xl border border-white/10">
                        <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>

                        {status === 'success' ? (
                            <div className="text-center py-12">
                                <div className="text-5xl mb-4">✨</div>
                                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                                <p className="text-gray-400">Thanks for reaching out. We'll get back to you within 24 hours.</p>
                                <Button variant="outline" className="mt-8" onClick={() => setStatus('idle')}>Send Another</Button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[var(--primary)] focus:outline-none transition-colors"
                                            placeholder="Jane Smith"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[var(--primary)] focus:outline-none transition-colors"
                                            placeholder="jane@example.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                                    <select
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange} // Corrected: Using generic handleChange which works for select too if typed properly, but let's cast or fix type if needed. React events are compatible.
                                        className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[var(--primary)] focus:outline-none transition-colors appearance-none"
                                    >
                                        <option value="">Select a topic...</option>
                                        <option value="Enrollment">Enrollment Inquiry</option>
                                        <option value="Corporate">Corporate Training</option>
                                        <option value="Support">Technical Support</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={5}
                                        className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[var(--primary)] focus:outline-none transition-colors resize-none"
                                        placeholder="How can we help you?"
                                    />
                                </div>

                                {/* Honeypot Field (Hidden) */}
                                <input
                                    type="text"
                                    name="honeypot"
                                    value={formData.honeypot}
                                    onChange={handleChange}
                                    className="hidden"
                                    tabIndex={-1}
                                    autoComplete="off"
                                />

                                {errorMessage && (
                                    <div className="text-red-400 text-sm bg-red-500/10 p-3 rounded-lg border border-red-500/20">
                                        {errorMessage}
                                    </div>
                                )}

                                <Button className="w-full py-4 text-lg" disabled={status === 'submitting'}>
                                    {status === 'submitting' ? 'Sending...' : 'Send Message'}
                                </Button>
                            </form>
                        )}
                    </div>

                    {/* Contact Info & Map */}
                    <div className="space-y-8">

                        {/* Info Cards */}
                        <div className="grid gap-6">
                            <div className="glass p-6 rounded-xl flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-[var(--primary)]/20 flex items-center justify-center text-2xl">
                                    📍
                                </div>
                                <div>
                                    <h3 className="font-bold text-white mb-1">Visit Us</h3>
                                    <p className="text-gray-400">123 Innovation Drive<br />Tech Valley, CA 94043</p>
                                </div>
                            </div>

                            <div className="glass p-6 rounded-xl flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-[var(--primary)]/20 flex items-center justify-center text-2xl">
                                    📧
                                </div>
                                <div>
                                    <h3 className="font-bold text-white mb-1">Email Us</h3>
                                    <p className="text-gray-400">hello@unboundbyte.com<br />support@unboundbyte.com</p>
                                </div>
                            </div>

                            <div className="glass p-6 rounded-xl flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-[var(--primary)]/20 flex items-center justify-center text-2xl">
                                    📞
                                </div>
                                <div>
                                    <h3 className="font-bold text-white mb-1">Call Us</h3>
                                    <p className="text-gray-400">+1 (555) 123-4567<br />Mon-Fri, 9am - 6pm PST</p>
                                </div>
                            </div>
                        </div>

                        {/* Map Embed */}
                        <div className="rounded-2xl overflow-hidden h-80 border border-white/10 relative bg-gray-900">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.628236556408!2d-122.08639518434778!3d37.422057779825424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba02425dad8f%3A0x6c296c66619367e0!2sGoogleplex!5e0!3m2!1sen!2sus!4v1616624991475!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: 'grayscale(100%) invert(90%)' }}
                                allowFullScreen
                                loading="lazy"
                                aria-label="Office Location"
                            ></iframe>
                            {/* Map Interaction Overlay (Optional, to enable scroll only on click if needed - omitting for simplicity) */}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
