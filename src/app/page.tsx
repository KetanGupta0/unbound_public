import React from 'react';
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
    {
      name: "Alex R.",
      role: "Software Engineer at Google",
      quote: "UnboundByte's system design course bridged the gap between my academic knowledge and what's actually needed in big tech. Highly recommended!"
    },
    {
      name: "Sarah M.",
      role: "Frontend Lead",
      quote: "The attention to detail in the teaching methodology is unmatched. I finally understand how React works under the hood."
    },
    {
      name: "James K.",
      role: "Career Switcher",
      quote: "I went from zero to a full-stack job in 6 months using their roadmap. The project-based approach changed everything for me."
    }
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
              <span className="text-gray-500">Video / Image Placeholder</span>
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
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Students Say</h2>
            <p className="text-gray-400">Don't just take our word for it.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="glass p-8 rounded-2xl relative">
                <div className="absolute top-6 right-8 text-4xl text-white/5 font-serif">"</div>
                <p className="text-gray-300 mb-6 relative z-10 italic">"{t.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[var(--primary)] to-[var(--accent)]"></div>
                  <div>
                    <h4 className="font-bold text-white text-sm">{t.name}</h4>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
                  <Button size="lg" className="bg-white text-black hover:bg-gray-200 shadow-xl">Get Started Now</Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black">Contact Sales</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
