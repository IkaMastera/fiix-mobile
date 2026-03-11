// ─────────────────────────────────────────────────────
// JOB TYPES
// These mirror the Laravel backend models exactly.
// If the backend changes a field — change it here first.
// TypeScript will show you every broken import immediately.
// ─────────────────────────────────────────────────────

// Mirrors the JobStatus enum in App\Domain\Jobs\Enums\JobStatus
// Every value here must match the Laravel enum exactly.
export type JobStatus =
  | 'submitted'
  | 'triaged'
  | 'assigned'
  | 'in_progress'
  | 'blocked'
  | 'done'
  | 'cancelled'
  | 'disputed'

// Mirrors the JobUrgency enum in App\Domain\Jobs\Enums\JobUrgency
export type JobUrgency =
  | 'low'
  | 'normal'
  | 'high'
  | 'emergency'

// Mirrors the jobs table and JobResource API response
export interface Job {
  id:          string
  ref:         string
  title:       string
  description: string
  status:      JobStatus
  urgency:     JobUrgency
  city:        string
  address:     string
  service:     Service
  created_at:  string
  updated_at:  string

  // Only present when status is assigned or later
  // Backend strips these fields if technician not yet assigned
  assignment?: JobAssignment
}

// Mirrors the job_assignments table
export interface JobAssignment {
  id:          string
  job_id:      string
  technician:  TechnicianSummary
  assigned_at: string
  accepted_at: string | null
}

// Minimal technician data shown to customer
// Full TechnicianProfile is in user.ts
export interface TechnicianSummary {
  id:         string
  name:       string
  rating:     number
  job_count:  number
  specialty:  string
}

// Mirrors the service_categories + services tables
export interface Service {
  id:       string
  name:     string
  category: ServiceCategory
  icon:     string           // emoji for now, image URL later
}

export interface ServiceCategory {
  id:   string
  name: string
  icon: string
}

// Job status history entry — shown in the timeline
export interface JobStatusHistory {
  id:         string
  job_id:     string
  status:     JobStatus
  note:       string | null
  created_at: string
}