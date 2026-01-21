"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { notFound, useParams } from 'next/navigation';
import { JOBS } from '@/data/jobs';

export default function JobDetailPage() {
    const params = useParams();
    const { id } = params;

    const job = JOBS.find(j => j.id === id);
    const [isApplying, setIsApplying] = useState(false);
    const [formState, setFormState] = useState({
        fullName: '',
        email: '',
        portfolio: '',
        coverLetter: '',
        file: null as File | null
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    if (!job) {
        return <div className="pt-32 text-center text-white">Job not found</div>;
        // Ideally we would use notFound() here but for client component simplicity we return a div or could trigger a redirect
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormState(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFormState(prev => ({ ...prev, file: e.target.files![0] }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        // Simulate API Call
        setTimeout(() => {
            setStatus('success');
            // Reset form or redirect
        }, 1500);
    };

    return (
        <div className="relative pt-24 pb-32">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Back Link */}
                <Link href="/careers" className="text-gray-400 hover:text-white mb-8 inline-flex items-center gap-2 text-sm">
                    ← Back to Careers
                </Link>

                {/* Header */}
                <div className="mb-12">
                    <h1 className="text-4xl font-bold text-white mb-4">{job.title}</h1>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                        <span className="bg-white/10 px-3 py-1 rounded-full">{job.department}</span>
                        <span className="bg-white/10 px-3 py-1 rounded-full">{job.location}</span>
                        <span className="bg-white/10 px-3 py-1 rounded-full">{job.type}</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Job Content */}
                    <div className="md:col-span-2 space-y-10 text-gray-300 leading-relaxed">
                        <section>
                            <h3 className="text-xl font-bold text-white mb-4">About the Role</h3>
                            <p>{job.description}</p>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-white mb-4">Responsibilities</h3>
                            <ul className="list-disc pl-5 space-y-2">
                                {job.responsibilities.map((req, i) => (
                                    <li key={i}>{req}</li>
                                ))}
                            </ul>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-white mb-4">Requirements</h3>
                            <ul className="list-disc pl-5 space-y-2">
                                {job.requirements.map((req, i) => (
                                    <li key={i}>{req}</li>
                                ))}
                            </ul>
                        </section>
                    </div>

                    {/* Application Form / Sidebar */}
                    <div className="relative">
                        <div className="glass p-6 rounded-2xl border border-white/10 sticky top-24">
                            <h3 className="text-xl font-bold text-white mb-2">Apply for this opening</h3>
                            <p className="text-xs text-gray-500 mb-6">Start your journey with UnboundByte today.</p>

                            {status === 'success' ? (
                                <div className="bg-green-500/10 border border-green-500/50 rounded-lg p-6 text-center">
                                    <div className="text-2xl mb-2">🎉</div>
                                    <h4 className="text-green-400 font-bold mb-2">Application Received!</h4>
                                    <p className="text-sm text-gray-300">We'll reviewed your application and get back to you shortly.</p>
                                    <Button variant="outline" size="sm" className="mt-4" onClick={() => setStatus('idle')}>Apply Again</Button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label className="block text-xs font-medium text-gray-400 mb-1">Full Name</label>
                                        <input
                                            type="text"
                                            name="fullName"
                                            required
                                            value={formState.fullName}
                                            onChange={handleInputChange}
                                            className="w-full bg-black/20 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:border-[var(--primary)] focus:outline-none transition-colors"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-medium text-gray-400 mb-1">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formState.email}
                                            onChange={handleInputChange}
                                            className="w-full bg-black/20 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:border-[var(--primary)] focus:outline-none transition-colors"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-medium text-gray-400 mb-1">Portfolio / LinkedIn</label>
                                        <input
                                            type="url"
                                            name="portfolio"
                                            value={formState.portfolio}
                                            onChange={handleInputChange}
                                            className="w-full bg-black/20 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:border-[var(--primary)] focus:outline-none transition-colors"
                                            placeholder="https://"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-medium text-gray-400 mb-1">Resume (PDF)</label>
                                        <div className="relative border border-dashed border-white/20 rounded-lg p-4 text-center hover:bg-white/5 transition-colors cursor-pointer">
                                            <input
                                                type="file"
                                                accept=".pdf"
                                                onChange={handleFileChange}
                                                required
                                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                            />
                                            <span className="text-xs text-gray-400 pointer-events-none">
                                                {formState.file ? formState.file.name : "Click to upload resume"}
                                            </span>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-medium text-gray-400 mb-1">Cover Letter (Optional)</label>
                                        <textarea
                                            name="coverLetter"
                                            value={formState.coverLetter}
                                            onChange={handleInputChange}
                                            rows={3}
                                            className="w-full bg-black/20 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:border-[var(--primary)] focus:outline-none transition-colors resize-none"
                                            placeholder="Tell us why you're a good fit..."
                                        />
                                    </div>
                                    <Button className="w-full" disabled={status === 'submitting'}>
                                        {status === 'submitting' ? 'Submitting...' : 'Submit Application'}
                                    </Button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
