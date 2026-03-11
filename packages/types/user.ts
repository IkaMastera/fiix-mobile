// ─────────────────────────────────────────────────────
// USER TYPES
// Mirrors the users table and role-specific profiles.
// ─────────────────────────────────────────────────────

// Mirrors the UserRole enum in App\Domain\Users\Enums\UserRole
export type UserRole =
  | 'customer'
  | 'technician'
  | 'operator'
  | 'admin'

// Mirrors the UserStatus enum in App\Domain\Users\Enums\UserStatus
export type UserStatus =
  | 'active'
  | 'blocked'
  | 'pending'

// Base user — fields present for every role
export interface User {
  id:         string
  name:       string
  email:      string
  phone:      string | null
  role:       UserRole
  status:     UserStatus
  created_at: string
}

// Customer-specific — what the customer app uses after login
export interface CustomerProfile extends User {
  role:             'customer'
  saved_addresses:  Address[]
  total_jobs:       number
  rating_given_avg: number
}

// Technician-specific — what the technician app uses after login
export interface TechnicianProfile extends User {
  role:         'technician'
  specialty:    string
  city:         string
  rating:       number
  job_count:    number
  is_available: boolean
  skills:       string[]
}

export interface Address {
  id:      string
  label:   string    // e.g. "Home", "Office"
  address: string
  city:    string
}