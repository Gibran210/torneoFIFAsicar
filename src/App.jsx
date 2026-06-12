import React, { useState } from 'react'
import Background        from './components/Background'
import Header            from './components/Header'
import FlagsBar          from './components/FlagsBar'
import Hero              from './components/Hero'
import RegistrationForm  from './components/RegistrationForm'
import RegistrationClosed from './components/RegistrationClosed'
import PlayersPanel      from './components/PlayersPanel'
import Toast             from './components/Toast'
import { useToast }      from './components/Toast'
import Confetti          from './components/Confetti'
import { useSheets }     from './hooks/useSheets'
import { REGISTRATION_OPEN, SHEET_READY } from './constants'

export default function App() {
  const { players, loadStatus, saveStatus, isEmailTaken, savePlayer, refresh } = useSheets()
  const { toast, showToast } = useToast()
  const [panelOpen,   setPanelOpen]   = useState(false)
  const [confettiKey, setConfettiKey] = useState(0)

  const handleSuccess = () => {
    setConfettiKey(k => k + 1)
    showToast(SHEET_READY ? '¡Inscripción guardada! ✓' : '¡Inscrito al torneo!')
  }

  return (
    <div className="page">
      <Background />
      <Confetti trigger={confettiKey} />
      <Toast {...toast} />

      {/* ── BARRA FIJA ── */}
      <div className="sticky-top">
        <Header playerCount={players.length} onOpenPanel={() => setPanelOpen(true)} />
        <FlagsBar />
      </div>

      {/* ── CONTENIDO ── */}
      <div className="page-content">
        <main className="principal">
          <Hero />
          {!REGISTRATION_OPEN ? (
            <RegistrationClosed total={players.length} />
          ) : (
            <RegistrationForm
              players={players}
              loadStatus={loadStatus}
              saveStatus={saveStatus}
              isEmailTaken={isEmailTaken}
              savePlayer={savePlayer}
              onSuccess={handleSuccess}
            />
          )}
        </main>
      </div>

      {/* ── PANEL ── */}
      <PlayersPanel
        open={panelOpen}
        players={players}
        loadStatus={loadStatus}
        onClose={() => setPanelOpen(false)}
        onRefresh={refresh}
      />
    </div>
  )
}
