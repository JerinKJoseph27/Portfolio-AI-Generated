import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + 10;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[10001] bg-navy-900 flex items-center justify-center">
      <div className="text-center">
        {/* Logo/Initials */}
        <div className="mb-8 animate-pulse">
          <h1 className="font-display text-6xl font-bold text-lime tracking-tight">
            JKJ
          </h1>
        </div>

        {/* Progress Bar */}
        <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden">
          <div 
            className="h-full bg-lime transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Loading Text */}
        <p className="mt-6 text-text-secondary text-sm font-mono">
          Loading Portfolio...
        </p>
      </div>
    </div>
  );
}
