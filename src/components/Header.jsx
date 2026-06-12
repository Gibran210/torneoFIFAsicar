import React from 'react'

export default function Header({ playerCount, onOpenPanel }) {
  return (
    <header className="header">
      <div className="header-logo">
        <div className="header-logo-badge">🎮</div>
        <div>
          <div className="header-logo-name">FIFA SICAR 2026</div>
          <div className="header-logo-sub">World Cup Edition · Torneo Oficial</div>
        </div>
      </div>

      <div className="header-right">
        <img src="/logo/logo.png" alt="Logo"
          style={{ height:52, width:'auto', objectFit:'contain' }} />


        {/* Botón inscritos */}
        <button className="header-panel-btn" onClick={onOpenPanel}>
          <div className="header-btn-dot" />
          Ver inscritos
          <span className="header-cnt">{playerCount}</span>
        </button>
      </div>
    </header>
  )
}
