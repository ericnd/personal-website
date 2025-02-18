"use client";

import { useEffect } from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.classList.add("dark"); // Force dark mode on load
    }
  }, []);

  return <>{children}</>;
}
