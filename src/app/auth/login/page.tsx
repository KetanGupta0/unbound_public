"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const router = useRouter();
    const [role, setRole] = useState<'student' | 'instructor' | 'admin'>('student');
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Mock Authentication Logic
        setTimeout(() => {
            setIsLoading(false);

            // Redirect based on selected role
            switch (role) {
                case 'admin':
                    alert("Redirecting to Admin Panel...");
                    router.push('/admin/dashboard'); // Mock path
                    break;
                case 'instructor':
                    alert("Redirecting to Instructor Panel...");
                    router.push('/instructor/courses'); // Mock path
                    break;
                case 'student':
                default:
                    alert("Redirecting to Student Dashboard...");
                    router.push('/dashboard/learning'); // Mock path
                    break;
            }
        }, 1500);
    };

    return (
        <div className="min-h-screen flex items-center justify-center pt-20 pb-20 px-4 relative overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black z-0"></div>
            <div className="hero-glow opacity-20"></div>

            <div className="max-w-md w-full glass p-8 rounded-2xl border border-white/10 relative z-10">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
                    <p className="text-gray-400">Sign in to continue your journey</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">

                    {/* Role Switcher (Mock Feature) */}
                    <div className="flex bg-black/20 p-1 rounded-lg">
                        {(['student', 'instructor', 'admin'] as const).map((r) => (
                            <button
                                key={r}
                                type="button"
                                onClick={() => setRole(r)}
                                className={`flex-1 text-xs font-medium py-2 rounded-md capitalize transition-colors ${role === r ? 'bg-[var(--primary)] text-white shadow-lg' : 'text-gray-400 hover:text-white'
                                    }`}
                            >
                                {r}
                            </button>
                        ))}
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
                        <div className="flex justify-between items-center mb-1">
                            <label className="block text-xs font-medium text-gray-400">Password</label>
                            <Link href="/auth/reset-password">
                                <span className="text-xs text-[var(--primary)] hover:text-white cursor-pointer transition-colors">Forgot?</span>
                            </Link>
                        </div>
                        <input
                            type="password"
                            required
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[var(--primary)] focus:outline-none transition-colors"
                            placeholder="••••••••"
                        />
                    </div>

                    <Button className="w-full py-4 text-base" disabled={isLoading}>
                        {isLoading ? 'Signing In...' : `Sign In as ${role.charAt(0).toUpperCase() + role.slice(1)}`}
                    </Button>
                </form>

                <div className="mt-8 text-center text-sm text-gray-400">
                    Don't have an account? {' '}
                    <Link href="/auth/register">
                        <span className="text-[var(--primary)] hover:text-white hover:underline transition-colors">Sign up</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
