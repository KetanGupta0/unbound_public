"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function ResetPasswordPage() {
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isSent, setIsSent] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Mock Reset Logic
        setTimeout(() => {
            setIsLoading(false);
            setIsSent(true);
        }, 1500);
    };

    return (
        <div className="min-h-screen flex items-center justify-center pt-20 pb-20 px-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-bl from-gray-900 to-black z-0"></div>
            <div className="hero-glow opacity-20"></div>

            <div className="max-w-md w-full glass p-8 rounded-2xl border border-white/10 relative z-10">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-white mb-2">Reset Password</h1>
                    <p className="text-gray-400">Enter your email to receive recovery instructions</p>
                </div>

                {isSent ? (
                    <div className="text-center">
                        <div className="text-5xl mb-4">📧</div>
                        <h3 className="text-xl font-bold text-white mb-2">Check your inbox</h3>
                        <p className="text-gray-400 mb-6">We've sent a password reset link to <span className="text-white">{email}</span></p>
                        <Button variant="outline" onClick={() => setIsSent(false)}>Try another email</Button>
                        <div className="mt-6">
                            <Link href="/auth/login" className="text-sm text-[var(--primary)] hover:underline">Back to Login</Link>
                        </div>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-xs font-medium text-gray-400 mb-1">Email</label>
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[var(--primary)] focus:outline-none transition-colors"
                                placeholder="name@example.com"
                            />
                        </div>

                        <Button className="w-full py-4 text-base" disabled={isLoading}>
                            {isLoading ? 'Sending Link...' : 'Send Reset Link'}
                        </Button>

                        <div className="mt-4 text-center">
                            <Link href="/auth/login" className="text-sm text-gray-400 hover:text-white transition-colors">
                                Back to Login
                            </Link>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}
