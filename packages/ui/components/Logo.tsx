// ─────────────────────────────────────────────────────
// LOGO COMPONENT
//
// The Fiix.ge logo -> Probably will change this logo later
// Size variants match the design system exactly.
// ─────────────────────────────────────────────────────

import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { colors } from '@fiix/config/colors'

type LogoSize = 'sm' | 'md' | 'lg' | 'xl'

interface LogoProps {
  size?: LogoSize
}

const SIZE_CONFIG = {
  sm: { icon: 28, text: 18, tld: 10, radius: 7  },
  md: { icon: 36, text: 22, tld: 12, radius: 9  },
  lg: { icon: 48, text: 30, tld: 13, radius: 13 },
  xl: { icon: 64, text: 42, tld: 16, radius: 18 },
}

export function Logo({ size = 'md' }: LogoProps) {
  const config = SIZE_CONFIG[size]

  return (
    <View style={styles.container}>
      {/* Shield icon box */}
      <View
        style={[
          styles.iconBox,
          {
            width:        config.icon,
            height:       config.icon,
            borderRadius: config.radius,
          },
        ]}
      >
        <Text style={{ fontSize: config.icon * 0.45 }}>✓</Text>
      </View>

      {/* Wordmark */}
      <View style={styles.wordmarkRow}>
        <Text
          style={[
            styles.wordmark,
            { fontSize: config.text },
          ]}
        >
          Fi<Text style={styles.ix}>ix</Text>
        </Text>
        <Text
          style={[
            styles.tld,
            { fontSize: config.tld },
          ]}
        >
          .ge
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems:    'center',
    gap:           8,
  },

  iconBox: {
    backgroundColor: colors.amber[300],
    alignItems:      'center',
    justifyContent:  'center',
    shadowColor:     colors.amber[300],
    shadowOffset:    { width: 0, height: 0 },
    shadowOpacity:   0.6,
    shadowRadius:    12,
    elevation:       8,
  },

  wordmarkRow: {
    flexDirection: 'row',
    alignItems:    'flex-end',
    gap:           2,
  },

  wordmark: {
    fontWeight:    '800',
    color:         '#FFFFFF',
    letterSpacing: -1,
    lineHeight:    1.1,
  },

  ix: {
    color: colors.amber[300],
  },

  tld: {
    color:         colors.ink[400],
    fontWeight:    '500',
    marginBottom:  2,
  },
})