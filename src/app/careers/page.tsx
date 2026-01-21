"use client";

import React from 'react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { JOBS } from '@/data/jobs';

export default function CareersPage() {
    return (
        <div className="relative pt-24 pb-32">
            <div className="hero-glow opacity-20"></div>

            {/* Hero */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                    Join the <span className="text-gradient">Revolution</span>
                </h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10">
                    We are building the future of engineering education. If you are passionate about code, design, and teaching, we want to hear from you.
                </p>
                <div className="flex justify-center gap-12 text-sm text-gray-500 font-medium tracking-wide uppercase">
                    <div>🚀 High Growth</div>
                    <div>🌍 Remote First</div>
                    <div>💡 Create Impact</div>
                </div>
            </div>

            {/* Culture / Benefits (Brief) */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="glass p-8 rounded-2xl">
                        <div className="text-3xl mb-4">🧠</div>
                        <h3 className="text-xl font-bold text-white mb-2">Continuous Learning</h3>
                        <p className="text-gray-400">Free access to all our courses and a stipend for external conferences.</p>
                    </div>
                    <div className="glass p-8 rounded-2xl">
                        <div className="text-3xl mb-4">🏥</div>
                        <h3 className="text-xl font-bold text-white mb-2">Comprehensive Health</h3>
                        <p className="text-gray-400">Full medical, dental, and vision coverage for you and your dependents.</p>
                    </div>
                    <div className="glass p-8 rounded-2xl">
                        <div className="text-3xl mb-4">🏖️</div>
                        <h3 className="text-xl font-bold text-white mb-2">Flexible PTO</h3>
                        <p className="text-gray-400">Take the time you need to recharge and come back refreshed.</p>
                    </div>
                </div>
            </div>

            {/* Job Listings */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-white mb-10 text-center">Open Positions</h2>

                <div className="space-y-4">
                    {JOBS.map((job) => (
                        <div key={job.id} className="glass p-6 rounded-xl hover:bg-white/10 transition-all duration-300 group flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                            <div>
                                <h3 className="text-xl font-bold text-white group-hover:text-[var(--primary)] transition-colors">{job.title}</h3>
                                <div className="flex items-center gap-4 mt-2 text-sm text-gray-400">
                                    <span className="flex items-center gap-1">🏢 {job.department}</span>
                                    <span className="flex items-center gap-1">📍 {job.location}</span>
                                    <span className="flex items-center gap-1">🕒 {job.type}</span>
                                </div>
                            </div>
                            <Link href={`/jobs/${job.id}`}>
                                <Button variant="secondary">View Role</Button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
