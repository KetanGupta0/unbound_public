'use client';

import { Inter } from "next/font/google";
import "./globals.css";
import { Button } from '@/components/ui/Button';

const inter = Inter({ subsets: ["latin"] });

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <html lang="en">
            <body className={`${inter.className} bg-black min-h-screen text-gray-200 antialiased`}>
                <div className="min-h-screen flex items-center justify-center p-4">
                    <div className="max-w-md text-center">
                        <h1 className="text-4xl font-bold text-white mb-4">Critical System Error</h1>
                        <p className="text-gray-400 mb-8">
                            A critical error occurred in the root layout. This is usually temporary.
                        </p>
                        <Button onClick={() => reset()}>Restart Application</Button>
                    </div>
                </div>
            </body>
        </html>
    );
}
