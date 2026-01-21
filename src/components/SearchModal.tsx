"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ALL_COURSES } from '@/data/courses';
import { useRouter } from 'next/navigation';

interface SearchResult {
    type: 'Course' | 'Page';
    title: string;
    url: string;
    description?: string;
    category?: string;
}

const STATIC_PAGES: SearchResult[] = [
    { type: 'Page', title: 'Home', url: '/', description: 'Welcome to UnboundByte' },
    { type: 'Page', title: 'About Us', url: '/about', description: 'Our Mission, Team, and Journey' },
    { type: 'Page', title: 'Services', url: '/services', description: 'Corporate Training & Consulting' },
    { type: 'Page', title: 'All Courses', url: '/courses', description: 'Browse our full catalog' },
    { type: 'Page', title: 'Careers', url: '/careers', description: 'Join our team' },
    { type: 'Page', title: 'Contact', url: '/contact', description: 'Get in touch' },
    { type: 'Page', title: 'Support Center', url: '/support', description: 'FAQs and Help' },
];

export const SearchModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<SearchResult[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);
    const router = useRouter();

    // Focus input when modal opens
    useEffect(() => {
        if (isOpen) {
            setTimeout(() => {
                inputRef.current?.focus();
            }, 100);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    // Handle Search Logic
    useEffect(() => {
        if (query.trim() === '') {
            setResults([]);
            return;
        }

        const lowerQuery = query.toLowerCase();

        // Search Pages
        const pageResults = STATIC_PAGES.filter(page =>
            page.title.toLowerCase().includes(lowerQuery) ||
            page.description?.toLowerCase().includes(lowerQuery)
        );

        // Search Courses
        const courseResults: SearchResult[] = ALL_COURSES.filter(course =>
            course.title.toLowerCase().includes(lowerQuery) ||
            course.description.toLowerCase().includes(lowerQuery) ||
            course.category.toLowerCase().includes(lowerQuery)
        ).map(course => ({
            type: 'Course',
            title: course.title,
            url: `/courses/${course.slug}`,
            description: course.level, // Use level as short description context
            category: course.category
        }));

        setResults([...pageResults, ...courseResults]);
    }, [query]);

    // Close on Escape
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    const handleSelect = (url: string) => {
        router.push(url);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-24 px-4 bg-black/60 backdrop-blur-sm" onClick={onClose}>
            <div
                className="w-full max-w-2xl bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[70vh] animate-in fade-in zoom-in-95 duration-200"
                onClick={e => e.stopPropagation()}
            >
                {/* Search Input */}
                <div className="flex items-center border-b border-white/10 p-4">
                    <svg className="w-5 h-5 text-gray-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    <input
                        ref={inputRef}
                        type="text"
                        className="flex-1 bg-transparent text-lg text-white placeholder-gray-500 focus:outline-none"
                        placeholder="Search courses, pages, or topics..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button onClick={onClose} className="px-2 py-1 text-xs font-mono text-gray-500 border border-white/10 rounded ml-4 hover:bg-white/5">ESC</button>
                </div>

                {/* Results List */}
                <div className="overflow-y-auto p-2">
                    {query === '' && (
                        <div className="p-8 text-center text-gray-500">
                            <p className="text-sm">Type to start searching...</p>
                            <div className="mt-4 flex flex-wrap justify-center gap-2">
                                <span className="text-xs border border-white/10 px-2 py-1 rounded cursor-pointer hover:bg-white/5" onClick={() => setQuery("React")}>React</span>
                                <span className="text-xs border border-white/10 px-2 py-1 rounded cursor-pointer hover:bg-white/5" onClick={() => setQuery("DevOps")}>DevOps</span>
                                <span className="text-xs border border-white/10 px-2 py-1 rounded cursor-pointer hover:bg-white/5" onClick={() => setQuery("Contact")}>Contact</span>
                            </div>
                        </div>
                    )}

                    {query !== '' && results.length === 0 && (
                        <div className="p-8 text-center text-gray-500">
                            <p>No results found for "{query}"</p>
                        </div>
                    )}

                    {results.length > 0 && (
                        <div className="space-y-1">
                            {results.map((result, index) => (
                                <div
                                    key={index}
                                    onClick={() => handleSelect(result.url)}
                                    className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 cursor-pointer group transition-colors"
                                >
                                    <div className="flex items-center gap-3">
                                        <span className={`text-xs px-2 py-1 rounded font-medium ${result.type === 'Course' ? 'bg-[var(--primary)]/20 text-[var(--primary)]' : 'bg-gray-800 text-gray-300'}`}>
                                            {result.type}
                                        </span>
                                        <div>
                                            <h4 className="text-sm font-medium text-white group-hover:text-[var(--primary)] transition-colors">{result.title}</h4>
                                            <p className="text-xs text-gray-500">{result.description}</p>
                                        </div>
                                    </div>
                                    {result.category && (
                                        <span className="text-xs text-gray-600 border border-white/5 px-2 py-0.5 rounded hidden sm:block">{result.category}</span>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Footer */}
                {results.length > 0 && (
                    <div className="p-2 border-t border-white/10 text-right bg-white/[0.02]">
                        <span className="text-xs text-gray-500">{results.length} results found</span>
                    </div>
                )}
            </div>
        </div>
    );
};
