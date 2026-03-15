// ─────────────────────────────────────────────────────
// API CLIENT — PUBLIC API
// Import everything from '@fiix/api-client'
// ─────────────────────────────────────────────────────

export { api, setAuthToken, getAuthToken, FiixApiError } from './client'
export { queryClient } from './query-client'
export { useLogin, useLogout } from './hooks/use-auth'
export { useJobs, useJob, useSubmitJob, jobKeys } from './hooks/use-jobs'