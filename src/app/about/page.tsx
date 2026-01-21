import React from 'react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function AboutPage() {
    const team = [
        {
            name: "David Chen",
            role: "Founder & CEO",
            bio: "Ex-Google Staff Engineer with 15 years of experience in distributed systems. Passionate about democratizing elite engineering education.",
        },
        {
            name: "Sarah Jenkins",
            role: "Head of Curriculum",
            bio: "Former PhD Researcher in Computer Science. Specialized in building pedagogical frameworks that simplify complex topics.",
        },
        {
            name: "Michael Ross",
            role: "CTO",
            bio: "Built scalable infrastructure for 3 Unicorn startups. Expert in Cloud Native architectures and DevOps.",
        },
        {
            name: "Elena Rodriguez",
            role: "Lead Instructor",
            bio: "Award-winning educator and Full Stack developer. focusing on mentorship and student success.",
        }
    ];

    const milestones = [
        {
            year: "2023",
            title: "The Inception",
            description: "UnboundByte was founded with a single mission: to fix the broken tech education system. We started with a small cohort of 10 students."
        },
        {
            year: "2024",
            title: "First 100 Graduates",
            description: "Our 'First Principles' approach proved successful. 96% of our pilot graduates secured roles at top-tier tech companies."
        },
        {
            year: "2025",
            title: "Platform Launch",
            description: "We launched our proprietary learning platform (LMS) to scale our curriculum globally, introducing automated code reviews and AI mentorship."
        },
        {
            year: "2026",
            title: "Global Expansion",
            description: "Now serving students across 5 continents, partnering with 50+ enterprise companies for direct hiring pipelines."
        }
    ];

    return (
        <div className="relative pt-20 pb-32 overflow-hidden">
            {/* Background Ambience */}
            <div className="hero-glow opacity-30"></div>

            {/* 1. ORGANIZATION OVERVIEW (HERO) */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
                <div className="text-center max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-8">
                        Redefining <span className="text-gradient">Engineering Education</span>
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-10">
                        UnboundByte is not just another bootcamp. We are an elite engineering academy designed for those who want to master the craft of software development.
                        Born from the frustration of seeing superficial tutorials, we built a curriculum that focuses on deep system understanding, scalability, and performance.
                    </p>
                    <div className="flex justify-center gap-6">
                        <div className="text-center px-6 py-4 glass rounded-xl">
                            <div className="text-3xl font-bold text-white mb-1">3+ Years</div>
                            <div className="text-xs text-gray-500 uppercase tracking-widest">Excellence</div>
                        </div>
                        <div className="text-center px-6 py-4 glass rounded-xl">
                            <div className="text-3xl font-bold text-[var(--primary)] mb-1">5000+</div>
                            <div className="text-xs text-gray-500 uppercase tracking-widest">Alumni</div>
                        </div>
                        <div className="text-center px-6 py-4 glass rounded-xl">
                            <div className="text-3xl font-bold text-[var(--accent)] mb-1">98%</div>
                            <div className="text-xs text-gray-500 uppercase tracking-widest">Hiring Rate</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. MISSION & VISION */}
            <section className="py-20 bg-white/5 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="glass p-10 rounded-2xl border-l-4 border-[var(--primary)]">
                        <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            To bridge the gap between academic computer science and enterprise-level software engineering.
                            We exist to empower developers to build robust, scalable, and efficient software systems that power the world.
                        </p>
                    </div>
                    <div className="glass p-10 rounded-2xl border-l-4 border-[var(--accent)]">
                        <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            A world where engineering education is accessible, practical, and deeply rooted in first principles.
                            We envision a future where every developer understands the "why" behind the code.
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. JOURNEY & MILESTONES */}
            <section className="py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-16">Our <span className="text-gradient">Journey</span></h2>
                    <div className="relative border-l border-white/10 ml-4 md:ml-1/2 space-y-12">
                        {milestones.map((item, index) => (
                            <div key={index} className="relative pl-8 md:pl-0">
                                {/* Timeline Dot */}
                                <div className="absolute top-0 left-[-5px] w-3 h-3 rounded-full bg-[var(--primary)] shadow-[0_0_10px_var(--primary)] md:left-1/2 md:-ml-[6px]"></div>

                                <div className={`md:flex items-center justify-between w-full ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                                    <div className="hidden md:block w-5/12"></div>
                                    <div className="md:w-5/12 glass p-6 rounded-xl hover:bg-white/10 transition-colors duration-300">
                                        <span className="text-[var(--primary)] font-bold text-lg mb-2 block">{item.year}</span>
                                        <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                        <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. TEAM INTRODUCTION */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white/5">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-6">Meet the <span className="text-gradient">Builders</span></h2>
                    <p className="text-xl text-gray-400 mb-16 max-w-2xl mx-auto">
                        Led by industry veterans from Google, Amazon, and top research institutions.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((member, index) => (
                            <div key={index} className="glass rounded-xl overflow-hidden group hover:transform hover:scale-105 transition-all duration-300">
                                <div className="h-64 bg-gray-800 relative overflow-hidden">
                                    {/* Placeholder for Team Image */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-center pb-6">
                                        <span className="text-6xl grayscale opacity-20 group-hover:opacity-40 transition-opacity">👤</span>
                                    </div>
                                </div>
                                <div className="p-6 text-left">
                                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                                    <div className="text-sm text-[var(--primary)] mb-4">{member.role}</div>
                                    <p className="text-xs text-gray-400 leading-relaxed mb-6 h-20">{member.bio}</p>

                                    <div className="flex gap-4 opacity-50 group-hover:opacity-100 transition-opacity">
                                        <Link href="#" className="text-xs hover:text-white">LinkedIn</Link>
                                        <Link href="#" className="text-xs hover:text-white">Twitter</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 text-center">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8">Be Part of Our Story</h2>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/careers">
                            <Button variant="outline" size="lg">Join the Team</Button>
                        </Link>
                        <Link href="/courses">
                            <Button size="lg">Start Learning</Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
