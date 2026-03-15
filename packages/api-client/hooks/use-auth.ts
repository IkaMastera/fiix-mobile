// ─────────────────────────────────────────────────────
// AUTH HOOKS
//
// All authentication logic lives here.
// Screens call these hooks — they never call api.post()
// for auth directly.
// ─────────────────────────────────────────────────────

import { useMutation } from '@tanstack/react-query'
import { api, setAuthToken } from '../client'
import type { AuthResponse } from '../../types/api'

// ── LOGIN ─────────────────────────────────────────────
// Called from the Login screen.
// On success: stores the token, React Query cache is ready.
// On error: FiixApiError is thrown with the message to show.
export function useLogin() {
  return useMutation({
    mutationFn: async (credentials: {
      email:    string
      password: string
    }) => {
      const response = await api.post<AuthResponse>(
        '/auth/login',
        credentials,
      )
      return response.data
    },

    onSuccess: (data) => {
      // Store the Sanctum token — all subsequent requests use it
      setAuthToken(data.token)
    },
  })
}

// ── LOGOUT ───────────────────────────────────────────
export function useLogout() {
  return useMutation({
    mutationFn: async () => {
      await api.post('/auth/logout', {})
    },
    onSuccess: () => {
      // Clear the token — next request will be unauthenticated
      setAuthToken(null)
    },
  })
}