
"use client";

import { useState, useEffect } from 'react';

const MOBILE_BREAKPOINT = 768; // Corresponds to Tailwind's 'md' breakpoint

export function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState(false); // Default to false or check on mount

  useEffect(() => {
    // Initial check
    const checkDevice = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    checkDevice(); // Run on mount

    // Add resize listener
    const handleResize = () => {
      checkDevice();
    };

    window.addEventListener('resize', handleResize);

    // Cleanup listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty dependency array ensures this runs only on mount and unmount

  return isMobile;
}
