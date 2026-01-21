"use client";

import React, { useRef, useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function Home() {
  const highlightedCourses = [
    {
      slug: "full-stack-mastery",
      title: "Full Stack Mastery",
      description: "Become a complete developer. Master Next.js, Node.js, PostgreSQL, and deployments.",
      level: "Advanced",
      duration: "12 Weeks",
      price: "$299"
    },
    {
      slug: "system-design-architect",
      title: "System Design & Architecture",
      description: "Learn how to design scalable systems like Netflix, Uber, and WhatsApp.",
      level: "Intermediate",
      duration: "8 Weeks",
      price: "$249"
    },
    {
      slug: "devops-cloud-native",
      title: "DevOps & Cloud Native",
      description: "Master Docker, Kubernetes, AWS, and CI/CD pipelines.",
      level: "Advanced",
      duration: "10 Weeks",
      price: "$279"
    }
  ];

  const testimonials = [
    { name: "Alex R.", role: "Software Engineer at Google", quote: "UnboundByte's system design course bridged the gap between my academic knowledge and what's actually needed in big tech." },
    { name: "Sarah M.", role: "Frontend Lead", quote: "The attention to detail in the teaching methodology is unmatched. I finally understand how React works under the hood." },
    { name: "James K.", role: "Career Switcher", quote: "I went from zero to a full-stack job in 6 months using their roadmap. The project-based approach changed everything for me." },
    { name: "Michael T.", role: "DevOps Engineer", quote: "The Kubernetes module is pure gold. It saved me weeks of trial and error in my current job." },
    { name: "Priya S.", role: "Backend Developer", quote: "I love how the curriculum focuses on scalable architecture rather than just syntax. A game changer." },
    { name: "David L.", role: "Full Stack Dev", quote: "The mentorship was excellent. Queries were resolved instantly, and code reviews were thorough." },
    { name: "Emily W.", role: "Product Manager", quote: "Took the 'Tech for PMs' track. Now I can actually converse confidently with my engineering team." },
    { name: "Daniel H.", role: "CS Student", quote: "Better than my university electives. Practical, hands-on, and up-to-date with industry standards." },
    { name: "Jessica B.", role: "Mobile Dev", quote: "Flutter vs React Native module helped me make the right choice for my startup's app." },
    { name: "Ryan G.", role: "CTO at Startup", quote: "I use UnboundByte to train my junior engineers. The consistency in quality is reliable." },
    { name: "Kevin N.", role: "Data Scientist", quote: "The Python for Engineering course helped me write production-ready code, not just scripts." },
    { name: "Laura C.", role: "UX Designer", quote: "Understanding frontend constraints helped me become a better designer. Highly recommended." },
    { name: "Robert P.", role: "Security Analyst", quote: "The DevSecOps section covered nuances that most other courses completely ignore." },
    { name: "Anita D.", role: "Freelancer", quote: "I increased my hourly rate by 50% after adding these advanced backend skills to my portfolio." },
    { name: "Thomas F.", role: "Systems Admin", quote: "Transitioning to SRE was seamless thanks to the Cloud Native track." },
    { name: "Olivia J.", role: "QA Engineer", quote: "Automation testing modules are top-notch. I built a full framework for my company." },
    { name: "William K.", role: "Blockchain Dev", quote: "The Web3 integration course was exactly what I needed to break into the crypto space." },
    { name: "Sophia M.", role: "Junior Dev", quote: "The community is amazing. I found my study partner here and we both got hired in the same month." },
    { name: "Ethan V.", role: "Cloud Architect", quote: "AWS deep dives are rigorous. Validated a lot of my architectural decisions." },
    { name: "Isabella R.", role: "Tech Lead", quote: "Refreshed my knowledge on microservices patterns. Content is dense and respects your time." }
  ];

  return (
    <div className="relative overflow-hidden">

      {/* 1. HERO SECTION */}
      <section className="relative pt-24 pb-32 overflow-hidden px-4 sm:px-6 lg:px-8 text-center">
        <div className="hero-glow"></div>
        <div className="relative max-w-7xl mx-auto z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8 animate-fade-in-up">
            <span className="animate-pulse w-2 h-2 rounded-full bg-[var(--primary)] mr-2"></span>
            <span className="text-sm text-gray-300">New Cohort Starts Feb 1st</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight">
            Build Systems, <br />
            <span className="text-gradient">Not Just Features</span>
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400 mb-10 leading-relaxed">
            UnboundByte provides enterprise-grade training for serious developers.
            Detailed curriculums, live mentorship, and day-one-ready skills.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/courses">
              <Button size="lg" className="w-full sm:w-auto shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)]">Explore Courses</Button>
            </Link>
            <Link href="/about">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">Our Mission</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. TRUST INDICATORS */}
      <section className="py-10 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-6">Trusted by engineers from top companies</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Logo Placeholders - Text for now, would be SVGs */}
            <span className="text-xl font-bold text-white">GOOGLE</span>
            <span className="text-xl font-bold text-white">AMAZON</span>
            <span className="text-xl font-bold text-white">META</span>
            <span className="text-xl font-bold text-white">MICROSOFT</span>
            <span className="text-xl font-bold text-white">UBER</span>
          </div>
        </div>
      </section>

      {/* 3. ORGANIZATION INTRODUCTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Who is <span className="text-gradient">UnboundByte?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              We are a team of senior engineers and educators dedicated to fixing the broken state of tech education.
              Most bootcamps teach you syntax; we teach you engineering.
            </p>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Our curriculum is derived from real-world challenges faced in high-scale production environments.
              When you learn with us, you aren't just coding—you're preparing for the job.
            </p>
            <Link href="/about">
              <Button variant="outline">Read Our Story</Button>
            </Link>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-2xl blur-2xl opacity-20"></div>
            <div className="relative glass p-8 rounded-2xl border-white/10 aspect-video flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">▶️</div>
                <span className="text-gray-500">Watch Our Journey</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HIGHLIGHTED COURSES */}
      <section className="py-24 bg-white/5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Courses</h2>
              <p className="text-gray-400">Hand-picked curriculums for maximum impact.</p>
            </div>
            <Link href="/courses" className="hidden md:block text-[var(--primary)] hover:text-white transition-colors">View All Courses →</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlightedCourses.map((course, index) => (
              <div key={index} className="glass rounded-2xl overflow-hidden hover:-translate-y-2 transition-transform duration-300">
                <div className="h-48 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 flex items-center justify-center border-b border-white/5">
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-2xl">
                    {index === 0 ? '⚛️' : index === 1 ? '🏗️' : '☁️'}
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white max-w-[70%]">{course.title}</h3>
                    <span className="bg-white/10 text-xs px-2 py-1 rounded text-gray-300 h-fit">{course.level}</span>
                  </div>
                  <p className="text-gray-400 text-sm mb-6 line-clamp-2">{course.description}</p>

                  <Link href={`/courses/${course.slug}`}>
                    <Button variant="secondary" className="w-full">View Details</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link href="/courses" className="text-[var(--primary)]">View All Courses →</Link>
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS */}
      <TestimonialsCarousel testimonials={testimonials} />

      {/* 6. CALL TO ACTION BANNER */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden px-8 py-20 text-center border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] to-purple-600 opacity-20"></div>
            <div className="absolute inset-0 backdrop-blur-3xl"></div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Ready to Start Your Journey?</h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Join thousands of developers mastering the craft of software engineering.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/courses">
                  <Button size="lg" className="bg-white !text-black hover:bg-gray-200 shadow-xl font-bold">Get Started Now</Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:!text-black transition-colors">Contact Sales</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

function TestimonialsCarousel({ testimonials }: { testimonials: { name: string; role: string; quote: string }[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll logic
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      handleScroll('next');
    }, 4000); // Scroll every 4 seconds

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleScroll = (direction: 'left' | 'right' | 'next' | 'prev') => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    // On mobile we scroll full width, on desktop we scroll ~400px
    const isMobile = window.innerWidth < 768;
    const scrollAmount = isMobile
      ? window.innerWidth * 0.85
      : 400 + 24; // Card width + gap

    const amount = (direction === 'left' || direction === 'prev') ? -scrollAmount : scrollAmount;

    // Check for loop condition
    const maxScroll = container.scrollWidth - container.clientWidth;

    if (direction === 'next' && container.scrollLeft >= maxScroll - 10) {
      // If at end, loop back efficiently
      container.scrollTo({ left: 0, behavior: 'smooth' });
    } else if (direction === 'prev' && container.scrollLeft <= 10) {
      // If at start, jump to end (optional, or just stop)
      container.scrollTo({ left: maxScroll, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 overflow-hidden group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}>
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Students Say</h2>
          <p className="text-gray-400">Join 5000+ alumni who have transformed their careers.</p>
        </div>

        {/* Navigation Buttons - Visible on hover or always on touch */}
        <button
          onClick={() => handleScroll('prev')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-[var(--primary)] text-white p-3 rounded-full backdrop-blur-md border border-white/10 transition-all opacity-0 group-hover:opacity-100 disabled:opacity-0 -ml-4 lg:-ml-12"
          aria-label="Previous testimonial"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>

        <button
          onClick={() => handleScroll('next')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-[var(--primary)] text-white p-3 rounded-full backdrop-blur-md border border-white/10 transition-all opacity-0 group-hover:opacity-100 disabled:opacity-0 -mr-4 lg:-mr-12"
          aria-label="Next testimonial"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>

        {/* Horizontal Scroll Container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto pb-8 pt-2 px-4 space-x-6 hide-scrollbar snap-x snap-mandatory scroll-smooth"
        >
          {testimonials.map((t, i) => (
            <div key={i} className="flex-none w-[85vw] md:w-[400px] snap-center">
              <div className="glass p-8 rounded-2xl relative h-full flex flex-col hover:bg-white/5 transition-colors cursor-pointer border border-white/5 hover:border-white/10">
                <div className="absolute top-6 right-8 text-4xl text-white/5 font-serif">"</div>
                <p className="text-gray-300 mb-6 relative z-10 italic flex-grow text-lg">"{t.quote}"</p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[var(--primary)] to-[var(--accent)] flex items-center justify-center text-sm font-bold text-white shadow-lg">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">{t.name}</h4>
                    <p className="text-sm text-[var(--primary)]">{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Indicators (Fading Edges) */}
        <div className="absolute top-0 left-0 w-8 h-full bg-gradient-to-r from-[var(--background)] to-transparent pointer-events-none md:w-20"></div>
        <div className="absolute top-0 right-0 w-8 h-full bg-gradient-to-l from-[var(--background)] to-transparent pointer-events-none md:w-20"></div>



      </div>
    </section>
  );
}
