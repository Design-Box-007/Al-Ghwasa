/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

function GAInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathname + (searchParams.toString() ? `?${searchParams}` : "");
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("config", "G-6TWP40MEWL", {
        page_path: url,
      });
    }
  }, [pathname, searchParams]);

  return null;
}

export function GoogleAnalytics() {
  return (
    <Suspense fallback={null}>
      <GAInner />
    </Suspense>
  );
}