export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')

  const params = new URLSearchParams(req.query)
  const url    = `${process.env.VITE_SHEET_URL}?${params.toString()}`

  try {
    const response = await fetch(url)
    const text     = await response.text()

    if (!text || text.trim().startsWith('<')) {
      return res.status(200).json({ success: false, error: 'Respuesta inválida del servidor' })
    }

    let json = text.trim()
    const match = json.match(/^[^(]+\((.+)\)$/)
    if (match) json = match[1]

    res.status(200).json(JSON.parse(json))
  } catch (err) {
    res.status(200).json({ success: false, error: err.message })
  }
}
