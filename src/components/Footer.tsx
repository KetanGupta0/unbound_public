import Link from 'next/link';

export const Footer = () => {
    return (
        <footer className="bg-[var(--background)] border-t border-white/5 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

                    {/* Brand Column */}
                    <div className="space-y-4">
                        <Link href="/" className="text-2xl font-bold tracking-tight">
                            <span className="text-white">Unbound</span>
                            <span className="text-[var(--primary)]">Byte</span>
                        </Link>
                        <p className="text-gray-400 text-sm">
                            Empowering the next generation of software engineers with enterprise-grade skills and first-principles thinking.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><Link href="/courses" className="hover:text-[var(--primary)] transition-colors">All Courses</Link></li>
                            <li><Link href="/about" className="hover:text-[var(--primary)] transition-colors">About Us</Link></li>
                            <li><Link href="/services" className="hover:text-[var(--primary)] transition-colors">Services</Link></li>
                            <li><Link href="/careers" className="hover:text-[var(--primary)] transition-colors">Careers</Link></li>
                        </ul>
                    </div>

                    {/* Legal / Resources */}
                    <div>
                        <h3 className="text-white font-bold mb-4">Resources</h3>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><Link href="/support" className="hover:text-[var(--primary)] transition-colors">Support Center</Link></li>
                            <li><Link href="/privacy-policy" className="hover:text-[var(--primary)] transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms-of-service" className="hover:text-[var(--primary)] transition-colors">Terms of Service</Link></li>
                            <li><Link href="/sitemap" className="hover:text-[var(--primary)] transition-colors">Sitemap</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-bold mb-4">Contact</h3>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li className="flex items-center gap-2">
                                <span>📧</span> hello@unboundbyte.com
                            </li>
                            <li className="flex items-center gap-2">
                                <span>📞</span> +1 (555) 123-4567
                            </li>
                            <li className="flex items-center gap-2">
                                <span>📍</span> Tech Park, Innovation City
                            </li>
                        </ul>
                        <div className="flex gap-4 mt-6">
                            {/* Social Icons Placeholders */}
                            <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center cursor-pointer hover:bg-[var(--primary)] transition-colors">𝕏</span>
                            <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center cursor-pointer hover:bg-[var(--primary)] transition-colors">in</span>
                            <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center cursor-pointer hover:bg-[var(--primary)] transition-colors">IG</span>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 text-center text-gray-600 text-sm">
                    <p>&copy; {new Date().getFullYear()} UnboundByte. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};
