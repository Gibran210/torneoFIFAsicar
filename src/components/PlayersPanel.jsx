import React from 'react'
import { createPortal } from 'react-dom'

function initials(name) {
  return name.trim().split(/\s+/).slice(0, 2).map(w => w[0]).join('').toUpperCase()
}

export default function PlayersPanel({ open, players, loadStatus, onClose, onRefresh }) {
  const panel = (
    <div className={`panel-overlay${open ? ' open' : ''}`} onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="panel">
        <div className="panel-top">
          <div className="panel-accent" />
          <button className="panel-close" onClick={onClose}>✕</button>
          <div className="panel-eye">Convocatoria · Google Sheets</div>
          <div className="panel-title">Inscritos</div>
          <button
            className={`panel-refresh${loadStatus === 'loading' ? ' spinning' : ''}`}
            onClick={onRefresh}
            disabled={loadStatus === 'loading'}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="23 4 23 10 17 10"/>
              <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>
            </svg>
            Actualizar
          </button>
        </div>

        <div className="panel-body">
          {loadStatus === 'loading' && (
            <div className="panel-loading">
              <div className="panel-spinner" />
              <p>Cargando desde Google Sheets…</p>
            </div>
          )}

          {loadStatus !== 'loading' && players.length === 0 && (
            <div className="panel-empty">
              <span className="panel-empty-ico">🎮</span>
              <p>Sin jugadores aún.<br />¡Sé el primero!</p>
            </div>
          )}

          {[...players].reverse().map((p, i) => (
            <div key={p.email + i} className="p-item">
              <div className="p-av">{initials(p.name)}</div>
              <div className="p-info">
                <div className="p-name">{p.name}</div>
                <div className="p-email">{p.email}</div>
                <div className="p-tags">
                  {p.depto && <span className="p-tag depto">{p.depto}</span>}
                  {p.consola && <span className="p-tag consola">{
    p.consola === 'Xbox'      ? '🟢 Xbox' :
    p.consola === 'PS5'       ? '🔵 PS5'  :
    '🎮 Cualquiera'
  }</span>}
                </div>
                {p.fecha && <div className="p-date">📅 {p.fecha}</div>}
              </div>
              <div className="p-num">#{String(p.number || '').padStart(2, '0')}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  return createPortal(panel, document.body)
}
