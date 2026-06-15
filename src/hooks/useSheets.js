import { useState, useEffect, useCallback, useRef } from 'react'
import { SHEET_READY } from '../constants'

export function useSheets() {
  const [players,    setPlayers]    = useState([])
  const [loadStatus, setLoadStatus] = useState('idle')
  const [saveStatus, setSaveStatus] = useState('idle')
  const playersRef = useRef([])

  useEffect(() => { playersRef.current = players }, [players])

  // ── Cargar jugadores ─────────────────────────────────────
  const load = useCallback(async () => {
    if (!SHEET_READY) { setLoadStatus('ok'); return }
    setLoadStatus('loading')
    try {
      const res  = await fetch(`/api/sheets?t=${Date.now()}`)
      const data = await res.json()
      if (data?.success && Array.isArray(data.players)) {
        setPlayers(data.players)
      }
      setLoadStatus('ok')
    } catch {
      setLoadStatus('error')
    }
  }, [])

  useEffect(() => { load() }, [load])

  // ── Validar email duplicado ──────────────────────────────
  const isEmailTaken = useCallback(email =>
    playersRef.current.some(p =>
      (p.email || '').toLowerCase() === email.toLowerCase()
    ), [])

  // ── Guardar jugador ──────────────────────────────────────
  const savePlayer = useCallback(async ({ name, email, depto, consola  }) => {
    setSaveStatus('saving')
    try {
      if (SHEET_READY) {
        const params = new URLSearchParams({ method:'POST', name, email, depto, consola })
        const res    = await fetch(`/api/sheets?${params}`)
        const data   = await res.json()
        if (!data?.success) {
          if (data?.error === 'EMAIL_DUPLICADO') throw new Error('EMAIL_DUPLICADO')
          throw new Error(data?.error || 'Error al guardar')
        }
      }
      const player = {
        name, email, depto, consola,
        number: playersRef.current.length + 1,
        fecha:  new Date().toLocaleString('es-MX'),
      }
      setPlayers(prev => [...prev, player])
      setSaveStatus('ok')
      setTimeout(() => setSaveStatus('idle'), 2000)
      return player
    } catch (err) {
      setSaveStatus('error')
      setTimeout(() => setSaveStatus('idle'), 2000)
      throw err
    }
  }, [])

  return { players, loadStatus, saveStatus, isEmailTaken, savePlayer, refresh: load }
}
