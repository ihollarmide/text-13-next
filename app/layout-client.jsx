"use client";
import React, { useState, useRef, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import queryClientConfig from "../queryClientConfig";

export default function RootLayoutClient({ children }) {
  const queryClient = useRef(new QueryClient(queryClientConfig));
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <QueryClientProvider client={queryClient.current}>
      <header>Here is the App Layout</header>
      <main>{children}</main>
      <footer>This is the footer</footer>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
