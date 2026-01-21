import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
            {/* Background Ambience */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 z-0"></div>
            <div className="hero-glow opacity-30"></div>

            <div className="relative z-10 text-center max-w-2xl">
                <h1 className="text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] mb-4 animate-pulse">
                    404
                </h1>
                <h2 className="text-3xl font-bold text-white mb-6">Page Not Found</h2>
                <p className="text-xl text-gray-400 mb-10 leading-relaxed">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link href="/">
                        <Button size="lg" className="shadow-lg shadow-indigo-500/20">Go Home</Button>
                    </Link>
                    <Link href="/contact">
                        <Button variant="outline" size="lg">Contact Support</Button>
                    </Link>
                </div>

                <div className="mt-12 pt-8 border-t border-white/5">
                    <p className="text-sm text-gray-500">
                        If you believe this is an error, please let us know.
                    </p>
                </div>
            </div>
        </div>
    );
}
