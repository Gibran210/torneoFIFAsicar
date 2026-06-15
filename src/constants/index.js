// ══════════════════════════════════════════════
//  ⚙️  Pega tu URL de Apps Script aquí
// ══════════════════════════════════════════════
export const SHEET_URL   = import.meta.env.VITE_SHEET_URL || ''
export const SHEET_READY = !!SHEET_URL && !SHEET_URL.includes('PEGA_TU')

export const REGISTRATION_OPEN = true  // false = cierra inscripciones

export const FLAGS = [
  'br','ar','fr','de','es','pt','be','nl',
  'mx','us','jp','kr','ng','gh','sn','ma',
  'cr','uy','ch','pl','au','ec',
  'dk','ca'
]

export const DEPTOS = [
  { value: 'Desarrollo', label: 'Desarrollo', icon: '💻', sub: 'Dev · Frontend · Backend' },
  { value: 'Soporte',    label: 'Soporte',    icon: '🎧', sub: 'Help Desk · Técnico'      },
 { value: 'Ventas',     label: 'Ventas',     icon: '📈', sub: 'Comercial · CRM'          },
  { value: 'Logística',  label: 'Logística',  icon: '🚚', sub: 'Envíos · Almacén'         },
]

export const CONSOLAS = [
  { value: 'Xbox',      label: 'Xbox',      icon: '🟢', sub: 'Xbox Series X/S' },
  { value: 'PS5',       label: 'PS5',       icon: '🔵', sub: 'PlayStation 5'   },
  { value: 'Cualquiera',label: 'Cualquiera',icon: '🎮', sub: 'Cualquier consola'      },
]

export const CONFETTI_COLORS = ['#0057e7','#00b0ff','#00e5ff','#ffffff','#7b2fff']
