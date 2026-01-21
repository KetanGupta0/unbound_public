"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from './ui/Button';
import { SearchModal } from './SearchModal';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    }

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5 bg-[var(--background)]/80 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 relative z-50">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <Link href="/" className="text-2xl font-bold tracking-tight" onClick={closeMenu}>
                                <span className="text-white">Unbound</span>
                                <span className="text-[var(--primary)]">Byte</span>
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-8">
                                <Link href="/courses" className="text-gray-300 hover:text-white transition-colors duration-200">Courses</Link>
                                <Link href="/services" className="text-gray-300 hover:text-white transition-colors duration-200">Services</Link>
                                <Link href="/about" className="text-gray-300 hover:text-white transition-colors duration-200">About</Link>
                                <Link href="/portfolio" className="text-gray-300 hover:text-white transition-colors duration-200">Portfolio</Link>
                                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors duration-200">Contact</Link>
                            </div>
                        </div>

                        {/* Right Side Actions */}
                        <div className="hidden md:flex items-center space-x-4">
                            {/* Search Trigger */}
                            <button
                                onClick={() => setIsSearchOpen(true)}
                                className="p-2 text-gray-400 hover:text-white transition-colors"
                                aria-label="Open Search"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </button>

                            <Link href="/auth/login">
                                <Button variant="ghost" size="sm">Log In</Button>
                            </Link>
                            <Link href="/courses">
                                <Button variant="primary" size="sm">Get Started</Button>
                            </Link>
                        </div>

                        {/* Mobile menu button & Search */}
                        <div className="md:hidden flex items-center gap-4">
                            <button
                                onClick={() => setIsSearchOpen(true)}
                                className="p-2 text-gray-400 hover:text-white transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </button>

                            <button
                                onClick={toggleMenu}
                                className="text-gray-300 hover:text-white focus:outline-none p-2"
                                aria-label="Toggle menu"
                            >
                                {isOpen ? (
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Full Screen Overlay - Fixed below navbar */}
                {isOpen && (
                    <div className="md:hidden fixed inset-0 top-16 z-40 bg-[var(--background)]/95 backdrop-blur-xl border-t border-white/5 h-[calc(100vh-4rem)] overflow-y-auto">
                        <div className="flex flex-col p-4 space-y-4">
                            <nav className="flex flex-col space-y-2">
                                <Link href="/" onClick={closeMenu} className="block px-4 py-3 rounded-lg text-lg font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-colors">
                                    Home
                                </Link>
                                <Link href="/courses" onClick={closeMenu} className="block px-4 py-3 rounded-lg text-lg font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-colors">
                                    Courses
                                </Link>
                                <Link href="/services" onClick={closeMenu} className="block px-4 py-3 rounded-lg text-lg font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-colors">
                                    Services
                                </Link>
                                <Link href="/about" onClick={closeMenu} className="block px-4 py-3 rounded-lg text-lg font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-colors">
                                    About
                                </Link>
                                <Link href="/portfolio" onClick={closeMenu} className="block px-4 py-3 rounded-lg text-lg font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-colors">
                                    Portfolio
                                </Link>
                                <Link href="/contact" onClick={closeMenu} className="block px-4 py-3 rounded-lg text-lg font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-colors">
                                    Contact
                                </Link>
                            </nav>

                            <div className="border-t border-white/10 pt-6 mt-4">
                                <div className="grid gap-4">
                                    <Link href="/auth/login" onClick={closeMenu} className="w-full">
                                        <Button variant="ghost" className="w-full justify-center text-lg py-6 bg-white/5 hover:bg-white/10">Log In</Button>
                                    </Link>
                                    <Link href="/courses" onClick={closeMenu} className="w-full">
                                        <Button variant="primary" className="w-full justify-center text-lg py-6 shadow-xl shadow-indigo-500/10">Get Started</Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </nav>

            {/* Global Search Modal */}
            <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        </>
    );
};
