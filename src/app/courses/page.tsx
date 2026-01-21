"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { ALL_COURSES, Course } from '@/data/courses';

const ITEMS_PER_PAGE = 6;

export default function CoursesPage() {
    // State
    const [courses, setCourses] = useState<Course[]>([]);
    const [visibleCourses, setVisibleCourses] = useState<Course[]>([]);
    const [page, setPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState<string>("All");
    const [sortBy, setSortBy] = useState<string>("relevance");
    const [isLoading, setIsLoading] = useState(false);

    // Refs for Infinite Scroll
    const loaderRef = useRef<HTMLDivElement>(null);

    const categories = ["All", "Frontend", "Backend", "DevOps", "System Design", "Mobile", "AI/ML"];

    // Filter and Sort Logic
    useEffect(() => {
        let result = [...ALL_COURSES];

        // Filter
        if (selectedCategory !== "All") {
            result = result.filter(c => c.category === selectedCategory);
        }

        // Sort
        switch (sortBy) {
            case "price-low":
                result.sort((a, b) => a.price - b.price);
                break;
            case "price-high":
                result.sort((a, b) => b.price - a.price);
                break;
            case "rating":
                result.sort((a, b) => b.rating - a.rating);
                break;
            case "popularity":
                result.sort((a, b) => b.students - a.students);
                break;
            default: // relevance (default order)
                break;
        }

        setCourses(result);
        setPage(1); // Reset to page 1 on filter change
        setVisibleCourses(result.slice(0, ITEMS_PER_PAGE));
    }, [selectedCategory, sortBy]);

    // Load More Logic
    const loadMore = useCallback(() => {
        if (isLoading || visibleCourses.length >= courses.length) return;

        setIsLoading(true);
        // Simulate network delay for realistic feel
        setTimeout(() => {
            const nextPage = page + 1;
            const newItems = courses.slice(0, nextPage * ITEMS_PER_PAGE);
            setVisibleCourses(newItems);
            setPage(nextPage);
            setIsLoading(false);
        }, 800);
    }, [page, courses, visibleCourses.length, isLoading]);

    // Infinite Scroll Observer
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const target = entries[0];
            if (target.isIntersecting) {
                loadMore();
            }
        }, {
            root: null,
            rootMargin: "20px",
            threshold: 0.1
        });

        if (loaderRef.current) {
            observer.observe(loaderRef.current);
        }

        return () => {
            if (loaderRef.current) {
                observer.unobserve(loaderRef.current);
            }
        };
    }, [loadMore]);

    return (
        <div className="relative pt-24 pb-32">
            {/* Header */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <div className="md:flex justify-between items-end">
                    <div>
                        <h1 className="text-4xl font-bold tracking-tight mb-4">
                            Explore <span className="text-gradient">Pro Courses</span>
                        </h1>
                        <p className="text-gray-400 max-w-xl">
                            Master the tools and technologies used by top tech companies.
                        </p>
                    </div>

                    {/* Sort Dropdown */}
                    <div className="mt-6 md:mt-0">
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[var(--primary)]"
                        >
                            <option value="relevance">Sort by: Relevance</option>
                            <option value="popularity">Most Popular</option>
                            <option value="rating">Highest Rated</option>
                            <option value="price-low">Price: Low to High</option>
                            <option value="price-high">Price: High to Low</option>
                        </select>
                    </div>
                </div>

                {/* Category Filter Pills */}
                <div className="flex flex-wrap gap-2 mt-8">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${selectedCategory === cat
                                    ? 'bg-[var(--primary)] text-white shadow-lg shadow-indigo-500/20'
                                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Course Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {visibleCourses.length === 0 ? (
                    <div className="text-center py-20">
                        <p className="text-gray-500 text-lg">No courses found matching your criteria.</p>
                        <Button
                            variant="outline"
                            className="mt-4"
                            onClick={() => { setSelectedCategory("All"); setSortBy("relevance"); }}
                        >
                            Clear Filters
                        </Button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {visibleCourses.map((course) => (
                            <div key={course.id} className="glass rounded-2xl overflow-hidden hover:translate-y-[-4px] transition-transform duration-300 flex flex-col h-full group">

                                {/* Card Header / Image Placeholder */}
                                <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 border-b border-white/5 relative p-6 flex flex-col justify-between group-hover:from-gray-800 group-hover:to-gray-800 transition-colors">
                                    <div className="flex justify-between items-start">
                                        <span className="bg-white/10 backdrop-blur-md text-xs px-2 py-1 rounded text-white font-medium">
                                            {course.category}
                                        </span>
                                        <span className="flex items-center text-yellow-400 text-sm font-bold gap-1">
                                            ★ {course.rating}
                                        </span>
                                    </div>
                                    <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center text-2xl">
                                        {course.category === 'Frontend' ? '⚛️' :
                                            course.category === 'Backend' ? '⚙️' :
                                                course.category === 'DevOps' ? '☁️' :
                                                    course.category === 'Mobile' ? '📱' :
                                                        course.category === 'AI/ML' ? '🤖' : '🏗️'}
                                    </div>
                                </div>

                                {/* Card Content */}
                                <div className="p-6 flex-grow flex flex-col">
                                    <h3 className="text-xl font-bold text-white mb-2 line-clamp-1">{course.title}</h3>
                                    <p className="text-gray-400 text-sm mb-6 line-clamp-2 flex-grow">{course.description}</p>

                                    <div className="space-y-4">
                                        <div className="flex justify-between text-sm border-t border-white/5 pt-4">
                                            <div className="text-gray-500">Duration</div>
                                            <div className="text-gray-200">{course.duration}</div>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <div className="text-gray-500">Level</div>
                                            <div className="text-gray-200">{course.level}</div>
                                        </div>
                                        <div className="flex justify-between items-center pt-2">
                                            <div className="text-xl font-bold text-[var(--primary)]">{course.priceDisplay}</div>
                                            <div className="text-xs text-gray-500">{course.students.toLocaleString()} students</div>
                                        </div>
                                    </div>

                                    <div className="mt-6">
                                        <Link href={`/courses/${course.slug}`} className="block w-full">
                                            <Button className="w-full">Enroll Now</Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Loading Indicator / Sentinel */}
                <div ref={loaderRef} className="py-12 text-center">
                    {isLoading && visibleCourses.length < courses.length && (
                        <div className="inline-flex items-center gap-2 text-gray-400">
                            <div className="w-4 h-4 border-2 border-[var(--primary)] border-t-transparent rounded-full animate-spin"></div>
                            Loading more courses...
                        </div>
                    )}
                    {!isLoading && visibleCourses.length >= courses.length && courses.length > 0 && (
                        <p className="text-gray-500 text-sm">You've reached the end of the list.</p>
                    )}
                </div>
            </div>
        </div>
    );
}
