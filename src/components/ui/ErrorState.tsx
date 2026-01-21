import React from 'react';
import { Button } from './Button';

interface ErrorStateProps {
    title?: string;
    message?: string;
    retryAction?: () => void;
}

export const ErrorState: React.FC<ErrorStateProps> = ({
    title = "Unable to load data",
    message = "There was an error loading this section. Please check your connection and try again.",
    retryAction
}) => {
    return (
        <div className="py-12 px-4 text-center border border-dashed border-white/10 rounded-xl bg-white/[0.02]">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-500/10 text-red-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
            <p className="text-gray-400 text-sm max-w-sm mx-auto mb-6">{message}</p>

            {retryAction && (
                <Button onClick={retryAction} variant="outline" size="sm">
                    Try Again
                </Button>
            )}
        </div>
    );
};
