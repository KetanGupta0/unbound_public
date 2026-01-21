'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/Button';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-[70vh] flex items-center justify-center p-4">
            <div className="glass p-8 md:p-12 rounded-2xl max-w-lg w-full text-center border-red-500/20">
                <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                </div>

                <h2 className="text-2xl font-bold text-white mb-4">Something went wrong!</h2>
                <p className="text-gray-400 mb-8">
                    We encountered an unexpected error while processing your request. Our engineering team has been notified.
                </p>

                <div className="flex flex-col gap-3">
                    <Button
                        onClick={
                            // Attempt to recover by trying to re-render the segment
                            () => reset()
                        }
                        className="w-full"
                    >
                        Try Again
                    </Button>
                    <Button
                        variant="ghost"
                        onClick={() => window.location.href = '/'}
                    >
                        Return Home
                    </Button>
                </div>

                {process.env.NODE_ENV === 'development' && (
                    <div className="mt-8 p-4 bg-black/50 rounded-lg text-left overflow-auto max-h-40 border border-white/10">
                        <p className="text-red-400 font-mono text-xs break-all">{error.message}</p>
                    </div>
                )}
            </div>
        </div>
    );
}
