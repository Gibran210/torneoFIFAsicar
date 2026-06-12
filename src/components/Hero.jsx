import React from 'react'

function Controller() {
  return (
    <div className="hero-ctrl-wrap">
      <svg
        className="hero-ctrl-svg"
        viewBox="0 0 260 160"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="bodyGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#1a2a5e"/>
            <stop offset="100%" stopColor="#0d1535"/>
          </linearGradient>
          <linearGradient id="neonBlue" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"   stopColor="#0057e7"/>
            <stop offset="100%" stopColor="#00b0ff"/>
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="glowBtn">
            <feGaussianBlur stdDeviation="2" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        {/* Sombra */}
        <ellipse cx="130" cy="155" rx="80" ry="6" fill="rgba(0,80,255,.2)"/>

        {/* Manga izquierda */}
        <path d="M22 65 Q8 65 6 85 L0 118 Q-2 135 18 137 Q36 139 50 118 L62 100 L62 72 Z"
          fill="url(#bodyGrad)" stroke="rgba(0,176,255,.25)" strokeWidth="1.2"/>

        {/* Manga derecha */}
        <path d="M238 65 Q252 65 254 85 L260 118 Q262 135 242 137 Q224 139 210 118 L198 100 L198 72 Z"
          fill="url(#bodyGrad)" stroke="rgba(0,176,255,.25)" strokeWidth="1.2"/>

        {/* Cuerpo principal */}
        <path d="M62 60 Q80 50 130 47 Q180 50 198 60 L202 130 Q200 148 180 148 L80 148 Q60 148 58 130 Z"
          fill="url(#bodyGrad)" stroke="rgba(0,176,255,.3)" strokeWidth="1.5"/>

        {/* Brillo superior */}
        <path d="M80 58 Q130 50 180 58" stroke="rgba(0,176,255,.4)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>

        {/* Neon trim lateral izq */}
        <path d="M62 72 L62 100" stroke="url(#neonBlue)" strokeWidth="2" strokeLinecap="round" filter="url(#glow)"/>
        {/* Neon trim lateral der */}
        <path d="M198 72 L198 100" stroke="url(#neonBlue)" strokeWidth="2" strokeLinecap="round" filter="url(#glow)"/>

        {/* ── D-PAD ── */}
        <rect x="72" y="84" width="10" height="30" rx="3" fill="#0044bb" opacity=".9"/>
        <rect x="64" y="92" width="26" height="10" rx="3" fill="#0044bb" opacity=".9"/>
        {/* Flechas */}
        <polygon points="77,86 81,86 79,82" fill="rgba(255,255,255,.6)"/>
        <polygon points="77,112 81,112 79,116" fill="rgba(255,255,255,.6)"/>
        <polygon points="65,96 65,100 61,98" fill="rgba(255,255,255,.6)"/>
        <polygon points="89,96 89,100 93,98" fill="rgba(255,255,255,.6)"/>

        {/* ── BOTONES ABCD ── */}
        {/* ▲ arriba — amarillo */}
        <circle cx="185" cy="86" r="7" fill="#f0c14b" filter="url(#glowBtn)"/>
        <text x="185" y="90" textAnchor="middle" fontSize="8" fill="#6b4a00" fontWeight="bold" fontFamily="Arial">▲</text>
        {/* ● der — rojo */}
        <circle cx="198" cy="99" r="7" fill="#e53935" filter="url(#glowBtn)"/>
        <text x="198" y="103" textAnchor="middle" fontSize="9" fill="#7a0000" fontWeight="bold" fontFamily="Arial">●</text>
        {/* ■ izq — azul */}
        <circle cx="172" cy="99" r="7" fill="#00b0ff" filter="url(#glowBtn)"/>
        <text x="172" y="103" textAnchor="middle" fontSize="8" fill="#003060" fontWeight="bold" fontFamily="Arial">■</text>
        {/* ✕ abajo — verde */}
        <circle cx="185" cy="112" r="7" fill="#00c853" filter="url(#glowBtn)"/>
        <text x="185" y="116" textAnchor="middle" fontSize="9" fill="#004020" fontWeight="bold" fontFamily="Arial">✕</text>

        {/* ── BOTONES CENTRALES ── */}
        <rect x="108" y="92" width="14" height="8" rx="4" fill="rgba(0,176,255,.2)" stroke="rgba(0,176,255,.3)" strokeWidth="1"/>
        <rect x="128" y="92" width="14" height="8" rx="4" fill="rgba(0,176,255,.2)" stroke="rgba(0,176,255,.3)" strokeWidth="1"/>
        {/* Logo centro */}
        <circle cx="130" cy="80" r="8" fill="rgba(0,80,200,.3)" stroke="rgba(0,176,255,.3)" strokeWidth="1"/>
        <text x="130" y="84" textAnchor="middle" fontSize="8" fill="rgba(0,176,255,.8)" fontFamily="Arial" fontWeight="bold">PS</text>

        {/* ── JOYSTICK IZQUIERDO ── */}
        <circle cx="98" cy="116" r="14" fill="#0a1030" stroke="url(#neonBlue)" strokeWidth="1.5"/>
        <circle cx="98" cy="116" r="9"  fill="#111830"/>
        <circle cx="98" cy="116" r="5"  fill="rgba(0,176,255,.25)"/>
        {/* Brillo joystick */}
        <circle cx="95" cy="113" r="2"  fill="rgba(0,176,255,.2)"/>

        {/* ── JOYSTICK DERECHO ── */}
        <circle cx="162" cy="116" r="14" fill="#0a1030" stroke="rgba(0,200,83,.4)" strokeWidth="1.5"/>
        <circle cx="162" cy="116" r="9"  fill="#111830"/>
        <circle cx="162" cy="116" r="5"  fill="rgba(0,200,83,.2)"/>
        <circle cx="159" cy="113" r="2"  fill="rgba(0,200,83,.15)"/>

        {/* Neon bottom strip */}
        <path d="M80 148 Q130 154 180 148" stroke="url(#neonBlue)" strokeWidth="1.5" fill="none" opacity=".5" filter="url(#glow)"/>
      </svg>

      {/* Aura de fondo del control */}
      <div className="hero-ctrl-aura" />
    </div>
  )
}

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-orb" />
      <div className="hero-tag">FIFA · Torneo Oficial · 2026</div>

      <h1 className="hero-title">
        <span className="hero-title--sub">Torneo</span>
        <span className="hero-title--year">2026</span>
        SICAR
      </h1>

      <div className="hero-divider" />

      {/* Control animado en lugar de emojis */}
      <Controller />
    </div>
  )
}
