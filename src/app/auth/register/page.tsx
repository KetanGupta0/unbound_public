"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function RegisterPage() {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Mock Registration Logic
        setTimeout(() => {
            setIsLoading(false);
            alert("Account created successfully! Redirecting to setup...");
        }, 1500);
    };

    return (
        <div className="min-h-screen flex items-center justify-center pt-20 pb-20 px-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-gray-900 to-black z-0"></div>
            <div className="hero-glow opacity-20"></div>

            <div className="max-w-md w-full glass p-8 rounded-2xl border border-white/10 relative z-10">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-white mb-2">Create Account</h1>
                    <p className="text-gray-400">Start learning with UnboundByte</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">

                    <div>
                        <label className="block text-xs font-medium text-gray-400 mb-1">Full Name</label>
                        <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[var(--primary)] focus:outline-none transition-colors"
                            placeholder="John Doe"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-medium text-gray-400 mb-1">Email</label>
                        <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[var(--primary)] focus:outline-none transition-colors"
                            placeholder="name@example.com"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-medium text-gray-400 mb-1">Password</label>
                        <input
                            type="password"
                            required
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[var(--primary)] focus:outline-none transition-colors"
                            placeholder="Create a strong password"
                        />
                    </div>

                    <Button className="w-full py-4 text-base" disabled={isLoading}>
                        {isLoading ? 'Creating Account...' : 'Sign Up'}
                    </Button>
                </form>

                <div className="mt-8 text-center text-sm text-gray-400">
                    Already have an account? {' '}
                    <Link href="/auth/login">
                        <span className="text-[var(--primary)] hover:text-white hover:underline transition-colors">Log In</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
