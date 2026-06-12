import React from 'react'

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

      <div className="hero-icons">
        <span className="hero-icon" style={{ animationDelay:'0s'   }}>⚽</span>
        <span className="hero-icon" style={{ animationDelay:'-.3s' }}>🎮</span>
        <span className="hero-icon" style={{ animationDelay:'-.6s' }}>🏆</span>
      </div>
    </div>
  )
}
