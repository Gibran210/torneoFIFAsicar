import React from 'react'

export default function Background() {
  return (
    <>
      {/* ── CIELO NOCTURNO ── */}
      <div className="bg-sky" />

      {/* ── ESTADIO SVG ── */}
      <svg
        className="bg-stadium"
        viewBox="0 0 1200 600"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMax slice"
      >
        {/* Estrellas */}
        {[
          [80,40],[200,25],[350,60],[500,30],[650,50],[800,20],[950,45],[1100,35],[150,80],[430,15],[720,70],[1050,55],[300,90],[870,30],[1150,75],
        ].map(([x,y], i) => (
          <circle key={i} cx={x} cy={y} r="1.2" fill="white" opacity={0.3 + (i%5)*0.1}
            style={{ animation: `starTwinkle ${2+i%3}s ease-in-out infinite`, animationDelay: `${i*0.3}s` }}/>
        ))}

        {/* ── GRADERÍAS IZQUIERDA ── */}
        <path d="M0 600 L0 200 Q150 180 280 220 L260 600 Z" fill="#0d1520" />
        <path d="M0 600 L0 200 Q150 180 280 220 L260 600 Z" fill="none" stroke="rgba(255,255,255,.04)" strokeWidth="1"/>
        {/* Filas de graderías izq */}
        {[220,260,300,340,380,420,460,500,540,580].map((y,i) => (
          <line key={i} x1={i*2} y1={y} x2={260-i*2} y2={y} stroke="rgba(255,255,255,.06)" strokeWidth="1"/>
        ))}
        {/* Siluetas multitud izq */}
        {Array.from({length:18}, (_,i) => (
          <ellipse key={i} cx={10+i*14} cy={190+Math.sin(i)*8} rx="5" ry="8"
            fill={`rgba(${20+i*3},${30+i*2},${50+i*4},.8)`} />
        ))}
        {Array.from({length:16}, (_,i) => (
          <ellipse key={i} cx={15+i*15} cy={210+Math.cos(i)*6} rx="5" ry="8"
            fill={`rgba(15,25,45,.9)`} />
        ))}

        {/* ── GRADERÍAS DERECHA ── */}
        <path d="M1200 600 L1200 200 Q1050 180 920 220 L940 600 Z" fill="#0d1520"/>
        {[220,260,300,340,380,420,460,500,540,580].map((y,i) => (
          <line key={i} x1={940+i*2} y1={y} x2={1200-i*2} y2={y} stroke="rgba(255,255,255,.06)" strokeWidth="1"/>
        ))}
        {Array.from({length:18}, (_,i) => (
          <ellipse key={i} cx={930+i*14} cy={190+Math.sin(i+3)*8} rx="5" ry="8"
            fill={`rgba(${15+i*2},${25+i*2},${45+i*3},.8)`} />
        ))}
        {Array.from({length:16}, (_,i) => (
          <ellipse key={i} cx={935+i*15} cy={210+Math.cos(i+2)*6} rx="5" ry="8"
            fill="rgba(15,25,45,.9)" />
        ))}

        {/* ── GRADERÍA FONDO (parte alta) ── */}
        <path d="M260 220 Q600 160 940 220 L940 320 Q600 280 260 320 Z" fill="#0e1825"/>
        {[240,265,290,315].map((y,i) => (
          <path key={i} d={`M${280-i*5} ${y} Q600 ${y-30} ${920+i*5} ${y}`}
            fill="none" stroke="rgba(255,255,255,.05)" strokeWidth="1"/>
        ))}
        {/* Multitud fondo */}
        {Array.from({length:40}, (_,i) => (
          <ellipse key={i} cx={270+i*17} cy={228+Math.sin(i*0.7)*5} rx="6" ry="9"
            fill={`rgba(${10+i%5*3},${20+i%4*3},${40+i%6*4},.85)`} />
        ))}
        {Array.from({length:38}, (_,i) => (
          <ellipse key={i} cx={275+i*17} cy={250+Math.cos(i*0.8)*4} rx="5" ry="8"
            fill="rgba(8,15,30,.9)" />
        ))}
        {Array.from({length:36}, (_,i) => (
          <ellipse key={i} cx={280+i*18} cy={272+Math.sin(i*0.6)*4} rx="5" ry="7"
            fill="rgba(10,18,35,.9)" />
        ))}

        {/* ── POSTES DE LUZ ── */}
        {/* Poste izquierdo */}
        <rect x="60"  y="90" width="8"  height="130" fill="#1a2a40" rx="2"/>
        <rect x="55"  y="88" width="18" height="8"   fill="#243550" rx="2"/>
        {/* Luces poste izq */}
        {[-20,-8,4,16,28].map((dx,i) => (
          <g key={i}>
            <rect x={55+dx} y="60" width="10" height="5" fill="#fffde7" rx="1" opacity=".9"/>
            <ellipse cx={60+dx} cy="62" rx="18" ry="12"
              fill="rgba(255,240,180,.06)"
              style={{ animation: `lightFlicker ${3+i*0.4}s ease-in-out infinite`, animationDelay:`${i*0.2}s` }}/>
          </g>
        ))}
        {/* Rayo de luz izquierdo hacia el campo */}
        <path d="M60 65 L280 380 L-20 380 Z" fill="url(#lightBeamL)" opacity=".07"/>

        {/* Poste derecho */}
        <rect x="1132" y="90" width="8"  height="130" fill="#1a2a40" rx="2"/>
        <rect x="1127" y="88" width="18" height="8"   fill="#243550" rx="2"/>
        {[-20,-8,4,16,28].map((dx,i) => (
          <g key={i}>
            <rect x={1127+dx} y="60" width="10" height="5" fill="#fffde7" rx="1" opacity=".9"/>
            <ellipse cx={1132+dx} cy="62" rx="18" ry="12"
              fill="rgba(255,240,180,.06)"
              style={{ animation: `lightFlicker ${3+i*0.4}s ease-in-out infinite`, animationDelay:`${i*0.3}s` }}/>
          </g>
        ))}
        <path d="M1140 65 L920 380 L1220 380 Z" fill="url(#lightBeamR)" opacity=".07"/>

        {/* ── CAMPO ── */}
        {/* Base verde */}
        <path d="M260 320 Q600 290 940 320 L980 600 L220 600 Z" fill="#0a2010"/>
        {/* Franjas de hierba */}
        {[0,1,2,3,4,5,6].map(i => (
          <path key={i} d={`M${220+i*30} 600 Q${430+i*50} ${340+i*5} ${980-i*30} 600`}
            fill="none" stroke={i%2===0 ? "rgba(0,60,20,.6)" : "rgba(0,80,25,.4)"} strokeWidth="28"/>
        ))}
        {/* Líneas del campo */}
        {/* Borde del campo */}
        <path d="M300 580 L300 340 Q600 310 900 340 L900 580 Z"
          fill="none" stroke="rgba(255,255,255,.18)" strokeWidth="1.5"/>
        {/* Centro */}
        <line x1="300" y1="460" x2="900" y2="460" stroke="rgba(255,255,255,.15)" strokeWidth="1.5"/>
        <ellipse cx="600" cy="460" rx="70" ry="40" fill="none" stroke="rgba(255,255,255,.15)" strokeWidth="1.5"/>
        <circle cx="600" cy="460" r="4" fill="rgba(255,255,255,.3)"/>
        {/* Área izq */}
        <rect x="300" y="410" width="100" height="100" fill="none" stroke="rgba(255,255,255,.12)" strokeWidth="1"/>
        <rect x="300" y="430" width="50"  height="60"  fill="none" stroke="rgba(255,255,255,.1)"  strokeWidth="1"/>
        {/* Área der */}
        <rect x="800" y="410" width="100" height="100" fill="none" stroke="rgba(255,255,255,.12)" strokeWidth="1"/>
        <rect x="850" y="430" width="50"  height="60"  fill="none" stroke="rgba(255,255,255,.1)"  strokeWidth="1"/>

        {/* ── ILUMINACIÓN SOBRE EL CAMPO ── */}
        <ellipse cx="600" cy="380" rx="350" ry="120"
          fill="rgba(255,250,200,.03)"
          style={{ animation: 'fieldGlow 4s ease-in-out infinite' }}/>

        {/* Gradiente haces de luz */}
        <defs>
          <radialGradient id="lightBeamL" cx="0%" cy="0%" r="100%">
            <stop offset="0%"   stopColor="rgba(255,240,150,.4)"/>
            <stop offset="100%" stopColor="rgba(255,240,150,0)"/>
          </radialGradient>
          <radialGradient id="lightBeamR" cx="100%" cy="0%" r="100%">
            <stop offset="0%"   stopColor="rgba(255,240,150,.4)"/>
            <stop offset="100%" stopColor="rgba(255,240,150,0)"/>
          </radialGradient>
        </defs>
      </svg>

      {/* Orbe azul central */}
      <div className="bg-orb" />
    </>
  )
}
