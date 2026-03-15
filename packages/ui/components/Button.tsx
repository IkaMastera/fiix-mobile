// ─────────────────────────────────────────────────────
// BUTTON COMPONENT
//
// The single button component used across both apps.
// ─────────────────────────────────────────────────────

import React from 'react'
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  StyleSheet,
  View,
} from 'react-native'
import { colors } from '@fiix/config/colors'

// The four button variants and when to use each:
// primary   → main CTA (Get Started, Continue, Submit Job)
// secondary → secondary action (Cancel, Go Back)
// ghost     → low-emphasis action on dark backgrounds
// danger    → destructive actions (Block, Cancel Job)
type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger'

interface ButtonProps {
  label:      string
  onPress:    () => void
  variant?:   ButtonVariant
  loading?:   boolean    // shows spinner, disables press
  disabled?:  boolean
  fullWidth?: boolean
}

export function Button({
  label,
  onPress,
  variant   = 'primary',
  loading   = false,
  disabled  = false,
  fullWidth = true,
}: ButtonProps) {

  // A button that is loading logically should not be pressable.
  const isDisabled = disabled || loading

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={isDisabled}
      activeOpacity={0.75}
      style={[
        styles.base,
        styles[variant],
        fullWidth && styles.fullWidth,
        isDisabled && styles.disabled,
      ]}
    >
      {loading ? (
        <ActivityIndicator
          color={variant === 'primary' ? '#000' : colors.amber[300]}
          size="small"
        />
      ) : (
        <Text style={[styles.label, styles[`${variant}Label`]]}>
          {label}
        </Text>
      )}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  // ── BASE ── applied to every variant
  base: {
    paddingVertical:   15,
    paddingHorizontal: 24,
    borderRadius:      24,
    alignItems:        'center',
    justifyContent:    'center',
    minHeight:         52,
  },

  fullWidth: {
    width: '100%',
  },

  disabled: {
    opacity: 0.45,
  },

  // ── VARIANTS ──
  primary: {
    backgroundColor: colors.amber[300],
    shadowColor:     colors.amber[300],
    shadowOffset:    { width: 0, height: 4 },
    shadowOpacity:   0.4,
    shadowRadius:    12,
    elevation:       8,
  },

  secondary: {
    backgroundColor: colors.ink[800],
    borderWidth:     1,
    borderColor:     colors.ink[600],
  },

  ghost: {
    backgroundColor: 'rgba(255,255,255,0.06)',
    borderWidth:     1,
    borderColor:     'rgba(255,255,255,0.1)',
  },

  danger: {
    backgroundColor: 'rgba(248,113,113,0.1)',
    borderWidth:     1,
    borderColor:     'rgba(248,113,113,0.2)',
  },

  // ── LABELS ──
  label: {
    fontSize:   15,
    fontWeight: '700',
    letterSpacing: -0.2,
  },

  primaryLabel: {
    color: '#000000',
  },

  secondaryLabel: {
    color: colors.ink[200],
  },

  ghostLabel: {
    color: 'rgba(255,255,255,0.75)',
  },

  dangerLabel: {
    color: '#F87171',
  },
})