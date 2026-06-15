import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-orb" />
      <div className="hero-tag">Torneo Oficial · 2026</div>

      <h1 className="hero-title">
        <span className="hero-title--sub">Torneo</span>
        <span className="hero-title--year">FIFA</span>
        SICAR
      </h1>

      <div className="hero-divider" />

      {/* Animación Lottie del control */}
      <DotLottieReact
        src="/logo/controller.json"
        autoplay
        loop
        style={{ width: '220px', height: '220px' }}
      />
    </div>
  )
}