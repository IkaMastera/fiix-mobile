// ─────────────────────────────────────────────────────
// REACT QUERY CLIENT CONFIGURATION
//
// One QueryClient instance is created here and shared
// across the entire app through React context.
// All caching behavior is configured here — nowhere else.
// ─────────────────────────────────────────────────────

import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // How long data is considered fresh — no refetch during this window.
      // 60 seconds means: if you navigate away and back within 60 seconds,
      // the data shows instantly from cache, no API call made.
      staleTime: 1000 * 60,

      // How long inactive data stays in memory before being garbage collected.
      // 5 minutes means: cached data survives background/foreground cycles.
      gcTime: 1000 * 60 * 5,

      // Retry failed requests 2 times before showing an error.
      // This is very common in mobile apps, network drops are common.
      retry: 2,

      // Wait 1 second before retrying — don't hammer the server.
      retryDelay: 1000,

      // Refetch when user returns to the app from background.
      // Ensures job status is always current when app is reopened.
      refetchOnWindowFocus: true,
    },
    mutations: {
      // Don't retry mutations — submitting a job twice would be bad.
      retry: 0,
    },
  },
})