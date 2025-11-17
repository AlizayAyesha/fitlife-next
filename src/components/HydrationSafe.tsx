'use client';

import { useEffect, useState, ReactNode } from 'react';

interface HydrationSafeProps {
  children: ReactNode;
  fallback?: ReactNode;
}

/**
 * Component that safely handles hydration mismatches caused by browser extensions
 * and other external DOM modifications
 */
export default function HydrationSafe({ children, fallback }: HydrationSafeProps) {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  // Return children when fully hydrated, fallback or null during hydration
  return (
    <>
      {isHydrated ? children : fallback || null}
    </>
  );
}
