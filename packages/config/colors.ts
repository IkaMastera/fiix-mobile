// ─────────────────────────────────────────────────────
// FIIX.GE — DESIGN TOKENS
// Single source of truth for all colors across all apps.
// Never hardcode hex values in components.
// Always import from here.
// ─────────────────────────────────────────────────────

export const colors = {

    // ── BRAND AMBER ──────────────────────────────────
    // The only warm color in the system.
    // Used for: primary CTAs, active states, logo, nav accent.
    amber: {
      50:    '#FFF8E7',
      100:   '#FFE9A0',
      200:   '#FFD060',
      300:   '#F5A623',  // ★ PRIMARY BRAND COLOR
      400:   '#E08C0A',
      500:   '#B86F00',
      glow:  'rgba(245,166,35,0.4)',
      dim:   'rgba(245,166,35,0.12)',
      border:'rgba(245,166,35,0.2)',
    },
  
    // ── DARK SURFACES ────────────────────────────────
    // Used for: backgrounds, cards, borders, dividers.
    // Scale from deepest black to near-white.
    ink: {
      1000: '#080808',  // deepest bg — splash screen
      950:  '#0D0D0D',  // main app bg
      900:  '#111111',
      850:  '#161616',
      800:  '#1C1C1C',  // card bg
      750:  '#222222',
      700:  '#2A2A2A',  // elevated card
      600:  '#333333',  // border
      500:  '#444444',
      400:  '#606060',
      300:  '#888888',  // tertiary text
      200:  '#AAAAAA',  // secondary text
      100:  '#D4D4D4',
      50:   '#F0F0F0',  // primary text on dark
    },
  
    // ── LIGHT SURFACES ───────────────────────────────
    // Used for: light mode screens (Home, Book, Profile)
    light: {
      bg:       '#F7F7F7',
      card:     '#FFFFFF',
      border:   '#EBEBEB',
      border2:  '#E0E0E0',
      text1:    '#0D0D0D',
      text2:    '#555555',
      text3:    '#999999',
    },
  
    // ── JOB STATUS COLORS ────────────────────────────
    // RULE: These colors are NEVER used as decoration.
    // Each maps directly to a JobStatus enum value
    // in the Laravel backend — the single source of truth.
    status: {
      submitted: {
        base: '#7C8CFF',
        bg:   'rgba(124,140,255,0.12)',
      },
      triaged: {
        base: '#B89BFF',
        bg:   'rgba(184,155,255,0.12)',
      },
      assigned: {
        base: '#F5A623',
        bg:   'rgba(245,166,35,0.12)',
      },
      in_progress: {
        base: '#34D399',
        bg:   'rgba(52,211,153,0.12)',
      },
      blocked: {
        base: '#F87171',
        bg:   'rgba(248,113,113,0.12)',
      },
      done: {
        base: '#10B981',
        bg:   'rgba(16,185,129,0.12)',
      },
      cancelled: {
        base: '#6B6B6B',
        bg:   'rgba(107,107,107,0.12)',
      },
      disputed: {
        base: '#F97316',
        bg:   'rgba(249,115,22,0.12)',
      },
    },
  
    // ── SEMANTIC ─────────────────────────────────────
    green:  '#34D399',
    red:    '#F87171',
    blue:   '#60A5FA',
    purple: '#A78BFA',
  
    // ── B2B VARIANT ──────────────────────────────────
    // Used exclusively for Fiix for Business contexts.
    b2b: {
      accent: '#4F8EF7',
      dim:    'rgba(79,142,247,0.12)',
    },

    // ── TECHNICIAN APP SPECIFIC ───────────────────────
    // Green is used in the Technician App as a second accent.
    // Amber = needs decision. Green = actively happening.
    // Never use these as decoration. This is only for the Technician App.
    tech: {
        available: {
        base: '#34D399',
        bg:   'rgba(52,211,153,0.12)',
        glow: 'rgba(52,211,153,0.4)',
        },
        busy: {
        base: '#F5A623',   // reuses amber — on a job
        bg:   'rgba(245,166,35,0.12)',
        },
        off: {
        base: '#444444',   // reuses ink.500 — offline
        bg:   'rgba(68,68,68,0.12)',
        },
    },
  
  } as const
  
  // ─────────────────────────────────────────────────────
  // Type export — lets TypeScript know the exact shape
  // of the colors object everywhere it's imported.
  // ─────────────────────────────────────────────────────
  export type Colors = typeof colors