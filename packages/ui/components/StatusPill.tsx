// ─────────────────────────────────────────────────────
// STATUS PILL COMPONENT
//
// Displays a job status with the correct color.
// ─────────────────────────────────────────────────────

import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { colors } from '@fiix/config/colors'
import type { JobStatus } from '@fiix/types'

interface StatusPillProps {
  status: JobStatus
}

// Maps each status to its display label
const STATUS_LABELS: Record<JobStatus, string> = {
  submitted:   'Submitted',
  triaged:     'Triaged',
  assigned:    'Assigned',
  in_progress: 'In Progress',
  blocked:     'Blocked',
  done:        'Done',
  cancelled:   'Cancelled',
  disputed:    'Disputed',
}

export function StatusPill({ status }: StatusPillProps) {
  const statusColor = colors.status[status]

  return (
    <View
      style={[
        styles.pill,
        { backgroundColor: statusColor.bg },
      ]}
    >
      <View
        style={[
          styles.dot,
          { backgroundColor: statusColor.base },
        ]}
      />
      <Text
        style={[
          styles.label,
          { color: statusColor.base },
        ]}
      >
        {STATUS_LABELS[status]}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  pill: {
    flexDirection:  'row',
    alignItems:     'center',
    gap:            5,
    paddingVertical:   3,
    paddingHorizontal: 9,
    borderRadius:   9999,
    alignSelf:      'flex-start',
  },

  dot: {
    width:        4,
    height:       4,
    borderRadius: 2,
  },

  label: {
    fontSize:      10,
    fontWeight:    '700',
    letterSpacing: 0.3,
  },
})