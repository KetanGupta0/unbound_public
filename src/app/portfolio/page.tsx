"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { PROJECTS, Project } from '@/data/projects';

export default function PortfolioPage() {
    const [selectedCategory, setSelectedCategory] = useState<string>("All");

    const categories = ["All", "Web App", "Mobile App", "DevOps", "AI/ML"];

    const filteredProjects = selectedCategory === "All"
        ? PROJECTS
        : PROJECTS.filter(p => p.category === selectedCategory);

    return (
        <div className="relative pt-24 pb-32">
            {/* Background */}
            <div className="hero-glow opacity-20"></div>

            {/* Header */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                    Our <span className="text-gradient">Work</span>
                </h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                    We don't just teach; we build. Explore some of the real-world projects delivered by our engineering team and alumni.
                </p>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-3 mt-10">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === cat
                                    ? 'bg-[var(--primary)] text-white shadow-lg shadow-indigo-500/20 scale-105'
                                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Gallery Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                        <div key={project.id} className="group relative rounded-2xl overflow-hidden glass hover:translate-y-[-4px] transition-transform duration-300">

                            {/* Image Area */}
                            <div className={`h-64 bg-gradient-to-br ${project.imageColor} relative overflow-hidden`}>
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>

                                {/* Overlay Content on Hover */}
                                <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 text-center">
                                    <h4 className="text-white font-bold text-lg mb-2">Technologies</h4>
                                    <div className="flex flex-wrap justify-center gap-2">
                                        {project.technologies.map(tech => (
                                            <span key={tech} className="text-xs border border-white/20 px-2 py-1 rounded text-gray-300">{tech}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Card Content */}
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-[var(--primary)] text-xs font-bold uppercase tracking-wider">{project.category}</span>
                                    <span className="text-gray-500 text-xs">{project.year}</span>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>

                                {project.client && (
                                    <div className="text-xs text-gray-500 border-t border-white/5 pt-4 mt-auto">
                                        Client: <span className="text-gray-300 font-medium">{project.client}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {filteredProjects.length === 0 && (
                    <div className="text-center py-20 text-gray-500">
                        No projects found in this category.
                    </div>
                )}
            </div>

            {/* CTA */}
            <div className="max-w-4xl mx-auto px-4 mt-32 text-center">
                <h2 className="text-3xl font-bold mb-6">Have a project in mind?</h2>
                <Button size="lg">Start a Conversation</Button>
            </div>
        </div>
    );
}
