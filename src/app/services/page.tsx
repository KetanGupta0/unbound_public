import React from 'react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function ServicesPage() {
    const services = [
        {
            id: "corporate-training",
            title: "Corporate Technical Training",
            icon: "🏢",
            shortDesc: "Upskill your engineering workforce with cutting-edge curriculum.",
            fullDesc: [
                "In a rapidly evolving tech landscape, your team's skills are your competitive advantage. UnboundByte delivers bespoke corporate training programs tailored to your tech stack and business goals.",
                "We don't just teach syntax; we teach engineering culture, best practices, and system design patterns that improve code quality and reduce technical debt."
            ],
            features: [
                "Customized curriculum based on your stack",
                "Hands-on workshops & hackathons",
                "Pre-and-post assessment reports",
                "Continuous mentorship options"
            ],
            cta: "Schedule a Consultation"
        },
        {
            id: "custom-development",
            title: "Custom Software Development",
            icon: "⚙️",
            shortDesc: "End-to-end product development for high-scale applications.",
            fullDesc: [
                "From MVP to enterprise-scale systems, our team of senior engineers builds software that is robust, secure, and scalable by default.",
                "We specialize in modern web technologies, cloud-native architectures, and real-time systems. Whether you need a complex dashboard, a high-frequency trading platform, or an AI-integrated tool, we deliver production-ready code."
            ],
            features: [
                "Full-cycle development (Design to Deploy)",
                "Cloud-native architecture (AWS/GCP/Azure)",
                "Microservices & Serverless expertise",
                "Legacy system modernization"
            ],
            cta: "Discuss Your Project"
        },
        {
            id: "consulting",
            title: "Technical Consulting & Architecture",
            icon: "🧩",
            shortDesc: "Expert guidance on system design, scalability, and DevOps.",
            fullDesc: [
                "Making the right architectural decisions early can save millions in the long run. UnboundByte provides fractional CTO services and architectural audits.",
                "We help you identify bottlenecks, optimize cloud costs, and design systems that can handle 10x growth without breaking."
            ],
            features: [
                "System Architecture Audits",
                "Cloud Cost Optimization",
                "Database Performance Tuning",
                "DevOps & CI/CD Strategy"
            ],
            cta: "Get Expert Advice"
        }
    ];

    return (
        <div className="relative pt-20 pb-32 overflow-hidden">
            <div className="hero-glow opacity-20"></div>

            {/* Hero Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 text-center">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                    Beyond <span className="text-gradient">Education</span>
                </h1>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                    We leverage our deep technical expertise to help businesses build better teams and better software.
                    No cookie-cutter solutions—just pure engineering excellence.
                </p>
            </div>

            {/* Detailed Service Sections */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
                {services.map((service, index) => (
                    <div key={index} id={service.id} className={`flex flex-col md:flex-row gap-16 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>

                        {/* Visual Side */}
                        <div className="w-full md:w-1/2">
                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                                <div className="relative glass p-12 rounded-2xl border border-white/10 flex flex-col items-center justify-center text-center aspect-[4/3]">
                                    <div className="text-8xl mb-6 transform group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                                    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                                </div>
                            </div>
                        </div>

                        {/* Content Side */}
                        <div className="w-full md:w-1/2 space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-4">{service.title}</h2>
                                <div className="h-1 w-20 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-full mb-6"></div>
                                <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                                    {service.fullDesc.map((paragraph, pIndex) => (
                                        <p key={pIndex}>{paragraph}</p>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Key Capabilities</h4>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {service.features.map((feature, fIndex) => (
                                        <li key={fIndex} className="flex items-center text-gray-400">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mr-2"></span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="pt-4">
                                <Link href="/contact">
                                    <Button size="lg" className="min-w-[200px]">{service.cta}</Button>
                                </Link>
                            </div>
                        </div>

                    </div>
                ))}
            </div>

            {/* Global CTA */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
                <div className="glass p-12 rounded-3xl text-center border border-white/10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--primary)] filter blur-[100px] opacity-20"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--accent)] filter blur-[100px] opacity-20"></div>

                    <h2 className="text-3xl font-bold mb-6 relative z-10">Have a unique challenge?</h2>
                    <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto relative z-10">
                        We love complex problems. Let's schedule a discovery call to see how we can help.
                    </p>
                    <Link href="/contact" className="relative z-10">
                        <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:!text-black">
                            Contact Us Specifically
                        </Button>
                    </Link>
                </div>
            </div>

        </div>
    );
}
