
"use client";

import { useState, useEffect } from 'react';

const MOBILE_BREAKPOINT = 768; // Corresponds to Tailwind's 'md' breakpoint

// Returns null initially, then boolean after client-side check
export function useIsMobile(): boolean | null {
  const [isMobile, setIsMobile] = useState<boolean | null>(null); // Initialize with null

  useEffect(() => {
    // This effect runs only on the client after the initial render
    const checkDevice = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    checkDevice(); // Set the initial state based on window size

    // Add resize listener
    window.addEventListener('resize', checkDevice);

    // Cleanup listener on component unmount
    return () => window.removeEventListener('resize', checkDevice);
  }, []); // Empty dependency array ensures this runs only once on mount

  return isMobile;
}
