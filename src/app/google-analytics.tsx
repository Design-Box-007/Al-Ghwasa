/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathname + (searchParams.toString() ? `?${searchParams}` : "");
    window.gtag?.("config", "G-6TWP40MEWL", { page_path: url });
  }, [pathname, searchParams]);

  return null;
}