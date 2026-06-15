import React, { useState } from 'react'
import { DEPTOS } from '../constants'

export default function RegistrationForm({
  players, loadStatus, saveStatus, isEmailTaken, savePlayer, onSuccess
}) {
  const [name,   setName]   = useState('')
  const [email,  setEmail]  = useState('')
  const [depto,  setDepto]  = useState('')
  const [errors, setErrors] = useState({})

  const isLoading = loadStatus === 'loading'
  const isSaving  = saveStatus === 'saving'

  const validate = () => {
    const errs = {}
    if (!name.trim())  errs.name  = 'El nombre es requerido'
    if (!email.trim()) {
      errs.email = 'El correo es requerido'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = 'Formato de correo inválido'
    } else if (isEmailTaken(email)) {
      errs.email = '¡Este correo ya está registrado!'
    }
    if (!depto) errs.depto = 'Selecciona un departamento'
    return errs
  }

  const handleSubmit = async () => {
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length > 0) return

    try {
      const player = await savePlayer({ name: name.trim(), email: email.trim(), depto })
      setName(''); setEmail(''); setDepto(''); setErrors({})
      onSuccess(player)
    } catch (err) {
      if (err?.message === 'EMAIL_DUPLICADO') {
        setErrors(e => ({ ...e, email: '¡Este correo ya está registrado!' }))
      }
    }
  }

  return (
    <div className="form-card-wrap">
      {/* Borde animado */}
      <div className="form-border-anim" />

      <div className="form-card">
        {/* Form lock mientras carga */}
        {isLoading && (
          <div className="form-lock">
            <div className="form-lock-spinner" />
            <span className="form-lock-txt">Verificando base de datos…</span>
          </div>
        )}

        <div className="form-eyebrow">Registro de jugador</div>
        <div className="form-title">Completa tus datos</div>

        {/* Precio */}
        <div className="form-price-row">
          <div className="form-price-left">
            <div className="form-price-ico">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#00b0ff" strokeWidth="2" strokeLinecap="round">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="8"  x2="12"    y2="12"/>
                <line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
            </div>
            <div>
              <div className="form-price-txt">Costo de inscripción</div>
              <div className="form-price-note">Se paga el día del evento</div>
            </div>
          </div>
          <div className="form-price-amt">$50</div>
        </div>

        {/* Nombre */}
        <FieldGroup label="Nombre completo" error={errors.name}>
          <FieldInput
            icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
              </svg>
            }
          >
            <input
              className="f-inp"
              type="text"
              placeholder="Ej. La Chacamota González"
              value={name}
              onChange={e => { setName(e.target.value); setErrors(r => ({ ...r, name:'' })) }}
              onKeyDown={e => e.key === 'Enter' && handleSubmit()}
            />
          </FieldInput>
        </FieldGroup>

        {/* Email */}
        <FieldGroup label="Correo electrónico" error={errors.email}>
          <FieldInput
            icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            }
          >
            <input
              className="f-inp"
              type="email"
              placeholder="jugador@sicar.mx"
              value={email}
              onChange={e => { setEmail(e.target.value); setErrors(r => ({ ...r, email:'' })) }}
              onKeyDown={e => e.key === 'Enter' && handleSubmit()}
            />
          </FieldInput>
        </FieldGroup>

        {/* Departamento */}
        <FieldGroup label="Departamento" error={errors.depto}>
          <DeptoSelect value={depto} onChange={v => { setDepto(v); setErrors(r => ({ ...r, depto:'' })) }} />
        </FieldGroup>

        {/* Botón */}
        <button
          className={`form-btn${isSaving ? ' loading' : ''}`}
          onClick={handleSubmit}
          disabled={isSaving || isLoading}
        >
          {isSaving ? (
            <div className="form-btn-spinner" />
          ) : (
            <>
              <span>🎮</span>
              INSCRIBIRME AL TORNEO
            </>
          )}
        </button>

        {/* Status DB */}
        <div className="form-db-status">
          <span className={`db-dot ${loadStatus}`} />
          <span className="db-txt">
            {loadStatus === 'loading' ? 'Sincronizando…'
             : loadStatus === 'ok'    ? `${players.length} inscritos`
             : 'Sin conexión'}
          </span>
        </div>
      </div>
    </div>
  )
}

function FieldGroup({ label, error, children }) {
  return (
    <div className="f-group">
      <span className="f-label-top">{label}</span>
      {children}
      {error && (
        <div className="f-err">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round">
            <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
          {error}
        </div>
      )}
    </div>
  )
}

function FieldInput({ icon, children }) {
  return (
    <div className="f-field">
      <div className="f-prefix">{icon}</div>
      {children}
      <div className="f-scan" />
    </div>
  )
}

function DeptoSelect({ value, onChange }) {
  const [open, setOpen] = useState(false)
  const sel = DEPTOS.find(d => d.value === value)

  return (
    <div className="depto-wrap" style={{ position: 'relative' }}>
      <div
        className={`f-field depto-trigger${open ? ' active' : ''}`}
        onClick={() => setOpen(o => !o)}
      >
        <div className="f-prefix">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
          </svg>
        </div>
        <span className={`f-inp depto-val${!value ? ' placeholder' : ''}`}>
          {sel ? `${sel.icon} ${sel.label}` : 'Selecciona tu departamento…'}
        </span>
        <svg className={`depto-chev${open ? ' open' : ''}`} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(0,176,255,.5)" strokeWidth="2.5" strokeLinecap="round">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
        <div className="f-scan" />
      </div>

      {open && (
        <div className="depto-dropdown">
          {DEPTOS.map(d => (
            <div
              key={d.value}
              className={`depto-option${value === d.value ? ' selected' : ''}`}
              onClick={() => { onChange(d.value); setOpen(false) }}
            >
              <span className="depto-option-icon">{d.icon}</span>
              <div>
                <div className="depto-option-label">{d.label}</div>
                <div className="depto-option-sub">{d.sub}</div>
              </div>
              {value === d.value && (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00b0ff" strokeWidth="2.5" strokeLinecap="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
