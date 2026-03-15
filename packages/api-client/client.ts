// ─────────────────────────────────────────────────────
// BASE HTTP CLIENT
//
// This is the single function that makes all API calls.
// Every request goes through here, meaning:
//   - Auth token is always attached automatically
//   - Errors are always handled consistently
//   - Base URL is defined in one place only
//
// When we switch from dummy data to real API,
// we change the BASE_URL and nothing else.
// ─────────────────────────────────────────────────────

import type { ApiResponse, ApiError } from '../types/api'

// ── CONFIGURATION ────────────────────────────────────
const BASE_URL = (process.env as Record<string, string>)['EXPO_PUBLIC_API_URL'] ?? 'http://localhost:80/api/v1'

// ── TOKEN STORAGE ────────────────────────────────────
let authToken: string | null = null

export function setAuthToken(token: string | null): void {
  authToken = token
}

export function getAuthToken(): string | null {
  return authToken
}

// ── BASE REQUEST FUNCTION ────────────────────────────
async function request<T>(
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',
  path: string,
  body?: unknown,
): Promise<T> {

  // Build headers — always JSON, always include token if present
  const headers: Record<string, string> = {
    'Content-Type':  'application/json',
    'Accept':        'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  }

  // Attach Sanctum token if we have one
  if (authToken) {
    headers['Authorization'] = `Bearer ${authToken}`
  }

  // Make the HTTP request
  const response = await fetch(`${BASE_URL}${path}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  })

  // Parse the JSON response body
  const json = await response.json()

  if (!response.ok) {
    const error = json as ApiError
    throw new FiixApiError(error.message, error.errors, response.status)
  }

  return json as T
}

// ── TYPED CONVENIENCE METHODS ────────────────────────
export const api = {
  get: <T>(path: string) =>
    request<ApiResponse<T>>('GET', path),

  post: <T>(path: string, body: unknown) =>
    request<ApiResponse<T>>('POST', path, body),

  patch: <T>(path: string, body: unknown) =>
    request<ApiResponse<T>>('PATCH', path, body),

  delete: <T>(path: string) =>
    request<ApiResponse<T>>('DELETE', path),
}

// ── CUSTOM ERROR CLASS ───────────────────────────────
export class FiixApiError extends Error {
  constructor(
    message: string,
    public readonly errors: Record<string, string[]> | null,
    public readonly status: number,
  ) {
    super(message)
    this.name = 'FiixApiError'
  }
}