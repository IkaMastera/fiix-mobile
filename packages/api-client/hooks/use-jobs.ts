// ─────────────────────────────────────────────────────
// JOB HOOKS
//
// All job-related API calls live here.
// Screens never call api.get() directly, they use these hooks.
// This means all caching, refetching, and error handling
// is consistent across every screen that shows jobs.
// ─────────────────────────────────────────────────────

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { api } from '../client'
import type {
  Job,
  PaginatedResponse,
  ApiResponse,
} from '@fiix/types'

// ── QUERY KEYS ───────────────────────────────────────
// Query keys are how React Query identifies cached data.
// I defined query keys in one place to avoid typos very hard to find bugs.
export const jobKeys = {
  all:    ['jobs']                    as const,
  list:   () => ['jobs', 'list']      as const,
  detail: (id: string) => ['jobs', id] as const,
}

// ── FETCH JOB LIST ───────────────────────────────────
// Returns many Jobs for the customer paginated list
export function useJobs() {
  return useQuery({
    queryKey: jobKeys.list(),
    queryFn:  async () => {
      const response = await api.get<PaginatedResponse<Job>>('/customer/jobs')
      return response.data
    },
  })
}

// ── FETCH SINGLE JOB ─────────────────────────────────
// Used by: Job Status screen
export function useJob(id: string) {
  return useQuery({
    queryKey: jobKeys.detail(id),
    queryFn:  async () => {
      const response = await api.get<Job>(`/customer/jobs/${id}`)
      return response.data
    },
    // Refetch every 30 seconds, for the user to see the latest status
    refetchInterval: 1000 * 30,
  })
}

// ── SUBMIT NEW JOB ───────────────────────────────────
// Called from the Book a Job screen
export function useSubmitJob() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (jobData: {
      title:       string
      description: string
      urgency:     string
      address:     string
      city:        string
      service_id:  string
    }) => {
      const response = await api.post<Job>('/customer/jobs', jobData)
      return response.data
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: jobKeys.list() })
    },
  })
}