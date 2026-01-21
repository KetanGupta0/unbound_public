import React from 'react';
import Link from 'next/link';

export default function SitemapPage() {
    const links = [
        {
            category: "Main",
            items: [
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Contact", href: "/contact" },
            ]
        },
        {
            category: "Education",
            items: [
                { name: "All Courses", href: "/courses" },
                { name: "Full Stack Mastery", href: "/courses/full-stack-mastery" },
                { name: "System Design", href: "/courses/system-design-architect" },
                { name: "DevOps & Cloud", href: "/courses/devops-cloud-native" },
            ]
        },
        {
            category: "Company",
            items: [
                { name: "Portfolio", href: "/portfolio" },
                { name: "Careers", href: "/careers" },
                { name: "Support Center", href: "/support" },
            ]
        },
        {
            category: "Legal",
            items: [
                { name: "Privacy Policy", href: "/privacy-policy" },
                { name: "Terms of Service", href: "/terms-of-service" },
            ]
        }
    ];

    return (
        <div className="relative pt-20 pb-32">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold mb-12 text-white">Sitemap</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {links.map((section, index) => (
                        <div key={index} className="glass p-8 rounded-2xl">
                            <h2 className="text-2xl font-bold text-[var(--primary)] mb-6">{section.category}</h2>
                            <ul className="space-y-4">
                                {section.items.map((link, i) => (
                                    <li key={i}>
                                        <Link href={link.href} className="text-gray-300 hover:text-white hover:underline transition-all">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
