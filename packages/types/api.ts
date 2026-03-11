// ─────────────────────────────────────────────────────
// API RESPONSE TYPES
// Every API response from Laravel is wrapped in one
// of these shapes. Never assume a raw value —
// always unwrap through these types.
// ─────────────────────────────────────────────────────

// Standard success response envelope
// Mirrors the JSON structure returned by all controllers
export interface ApiResponse<T> {
    data:    T
    message: string | null
  }
  
  // Paginated list response — all list endpoints return this
  export interface PaginatedResponse<T> {
    data: T[]
    meta: {
      current_page: number
      last_page:    number
      per_page:     number
      total:        number
    }
  }
  
  // Standard error envelope — mirrors global exception handler
  export interface ApiError {
    message: string
    errors:  Record<string, string[]> | null  // validation errors
    code:    number
  }
  
  // Auth token response — returned by login endpoint
  export interface AuthResponse {
    token: string
    user:  import('./user').User
  }