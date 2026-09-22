"use client";

import React, { useEffect, useState } from "react";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import dynamic from "next/dynamic";

// Dynamically import App to ensure no server-side execution of browser-only animation/3D modules
const App = dynamic(() => import("../App"), {
  ssr: false,
  loading: () => (
    <div style={{ minHeight: "100vh", backgroundColor: "#050505" }}></div>
  ),
});

const queryClient = new QueryClient();

export default function ClientApp() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div style={{ minHeight: "100vh", backgroundColor: "#050505" }}></div>
    );
  }

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </HelmetProvider>
  );
}
