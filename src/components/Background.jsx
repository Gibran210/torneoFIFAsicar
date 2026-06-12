import React from 'react'

export default function Background() {
  return (
    <>
      {/* Cielo oscuro */}
      <div className="bg-sky" />

      {/* Luces de estadio */}
      <div className="bg-light bg-light--l" />
      <div className="bg-light bg-light--r" />
      <div className="bg-light bg-light--c" />

      {/* Pasto */}
      <div className="bg-turf">
        <div className="bg-turf-lines" />
      </div>

      {/* Orbe central sutil */}
      <div className="bg-orb" />

      {/* Balones flotantes */}
      {[8, 20, 35, 50, 65, 78, 90].map((l, i) => (
        <div
          key={l}
          className="bg-ball"
          style={{
            left:              `${l}%`,
            fontSize:           14 + (i % 3) * 5,
            animationDuration: `${14 + i * 2}s`,
            animationDelay:    `${i * -2.5}s`,
          }}
        >
          {i % 2 === 0 ? '⚽' : '🎮'}
        </div>
      ))}
    </>
  )
}
