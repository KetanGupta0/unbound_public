import React from 'react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { ALL_COURSES } from '@/data/courses';
import { notFound } from 'next/navigation';

export default async function CourseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    // Find course by slug
    const course = ALL_COURSES.find(c => c.slug === slug);

    if (!course) {
        notFound();
    }

    // Fallback data if extended details aren't present (for the other 18 courses)
    const outcomes = course.learningOutcomes || [
        "Master the core concepts of the technology",
        "Build real-world projects",
        "Learn industry best practices",
        "Understand performance optimization techniques"
    ];

    const curriculum = course.curriculum || [
        { week: "Week 1-2", topic: "Foundations & Setup", details: "Setting up the environment and core concepts." },
        { week: "Week 3-4", topic: "Intermediate Concepts", details: "Deep dive into the framework/language features." },
        { week: "Week 5-6", topic: "Advanced Architectures", details: "Building for scale and performance." },
        { week: "Week 7-8", topic: "Capstone Project", details: "Applying knowledge to a final production-grade application." }
    ];

    const schedule = course.schedule || [
        "Flexible / Self-paced options available",
        "Weekly live Q&A sessions"
    ];

    const longDescription = course.longDescription || course.description;

    return (
        <div className="relative pb-32">
            {/* 1. HERO HEADER */}
            <div className="relative pt-32 pb-20 overflow-hidden border-b border-white/5 bg-[var(--background)]">
                <div className="hero-glow opacity-30"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <Link href="/courses" className="text-sm text-[var(--primary)] hover:text-white mb-6 inline-flex items-center gap-2 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                        Back to Courses
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-xs font-medium text-white mb-4 border border-white/5">
                                {course.category} • {course.level}
                            </span>
                            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">{course.title}</h1>
                            <p className="text-xl text-gray-400 mb-8 leading-relaxed">{course.description}</p>

                            <div className="flex flex-wrap gap-6 mb-8 text-sm text-gray-300">
                                <div className="flex items-center gap-2">
                                    <span>⏱️</span> {course.duration}
                                </div>
                                <div className="flex items-center gap-2">
                                    <span>👤</span> {course.students.toLocaleString()} Enrolled
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-yellow-400">★</span> {course.rating} Rating
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <Button size="lg" className="shadow-xl shadow-indigo-500/20">Enroll Now for {course.priceDisplay}</Button>
                                <Button variant="outline" size="lg">Download Syllabus</Button>
                            </div>
                        </div>

                        {/* Media Placeholder */}
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--primary)] to-[var(--accent)] rounded-2xl blur-2xl opacity-20"></div>
                            <div className="relative aspect-video bg-gray-900 rounded-2xl border border-white/10 flex items-center justify-center overflow-hidden group">
                                <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md group-hover:scale-110 transition-transform duration-300 cursor-pointer">
                                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                                </div>
                                <div className="absolute bottom-4 left-4 right-4 text-center">
                                    <p className="text-sm font-medium text-gray-400">Watch Course Preview</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. MAIN CONTENT GRID */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-3 gap-16">

                {/* Left Column (Content) */}
                <div className="lg:col-span-2 space-y-16">

                    {/* About This Course */}
                    <section>
                        <h2 className="text-2xl font-bold mb-6 text-white">About This Course</h2>
                        <p className="text-gray-300 leading-relaxed text-lg">
                            {longDescription}
                        </p>
                    </section>

                    {/* Learning Outcomes */}
                    <section>
                        <h2 className="text-2xl font-bold mb-6 text-white">What You'll Learn</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {outcomes.map((item, i) => (
                                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
                                    <span className="text-green-400 mt-1">✓</span>
                                    <span className="text-gray-300">{item}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Curriculum */}
                    <section>
                        <h2 className="text-2xl font-bold mb-6 text-white">Curriculum</h2>
                        <div className="space-y-4">
                            {curriculum.map((item, i) => (
                                <div key={i} className="group glass p-6 rounded-xl hover:bg-white/10 transition-colors">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                                        <h4 className="font-bold text-white text-lg">{item.topic}</h4>
                                        <span className="text-xs font-mono px-2 py-1 rounded bg-white/10 text-gray-400 whitespace-nowrap">{item.week}</span>
                                    </div>
                                    <p className="text-gray-400 text-sm">{item.details}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                </div>

                {/* Right Column (Sidebar) */}
                <div className="space-y-8">

                    {/* Enrollment Card */}
                    <div className="glass p-8 rounded-2xl sticky top-24 border border-[var(--primary)]/30">
                        <div className="text-center mb-6">
                            <span className="text-gray-400 text-sm uppercase tracking-wide">Total Price</span>
                            <div className="text-5xl font-bold text-white mt-2">{course.priceDisplay}</div>
                        </div>

                        <Button className="w-full mb-4 py-4 text-lg shadow-xl shadow-indigo-500/20">Enroll Now</Button>
                        <p className="text-xs text-center text-gray-500 mb-6">30-Day Money-Back Guarantee</p>

                        <div className="space-y-4 pt-6 border-t border-white/10">
                            <h4 className="font-bold text-white text-sm">Course Includes:</h4>
                            <ul className="space-y-3 text-sm text-gray-300">
                                <li className="flex items-center gap-3">
                                    <span>📺</span> {parseInt(course.duration) * 4}+ Hours of Video
                                </li>
                                <li className="flex items-center gap-3">
                                    <span>💻</span> 10+ Hands-on Projects
                                </li>
                                <li className="flex items-center gap-3">
                                    <span>📜</span> Certificate of Completion
                                </li>
                                <li className="flex items-center gap-3">
                                    <span>∞</span> Lifetime Access
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Schedule Card */}
                    <div className="glass p-6 rounded-2xl">
                        <h3 className="font-bold text-white mb-4">Class Schedule</h3>
                        <ul className="space-y-3 text-sm text-gray-400">
                            {schedule.map((time, i) => (
                                <li key={i} className="flex gap-3">
                                    <span className="text-[var(--primary)]">•</span> {time}
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

            </div>
        </div>
    );
}
