import React from 'react'

export default function RegistrationClosed({ total }) {
  return (
    <div className="closed-wrap">
      <div className="closed-border-anim" />
      <div className="closed-card">
        <div className="closed-icon">
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#00b0ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2"/>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
          </svg>
        </div>
        <h2 className="closed-title">Inscripciones Cerradas</h2>
        <p className="closed-sub">Se ha alcanzado el límite de jugadores para este torneo.</p>
        <div className="closed-count">
          <span className="closed-count-num">{total}</span>
          <span className="closed-count-lbl">jugadores inscritos</span>
        </div>
        <div className="closed-bar">
          <div className="closed-bar-fill" style={{ width: '100%' }} />
        </div>
        <p className="closed-footer">⚽ Torneo FIFA SICAR 2026 · Gracias por tu interés</p>
      </div>
    </div>
  )
}
