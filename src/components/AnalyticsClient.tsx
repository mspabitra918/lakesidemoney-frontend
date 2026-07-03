"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { pageview, GA_ID } from "../lib/gtag";

export default function AnalyticsClient() {
  const pathname = usePathname();

  useEffect(() => {
    if (!GA_ID) return;
    pageview(window.location.pathname + window.location.search);
  }, [pathname]);

  return null;
}
