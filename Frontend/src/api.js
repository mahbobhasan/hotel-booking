const API_BASE = 'http://localhost:5000/api'

export async function fetchRooms() {
  const r = await fetch(`${API_BASE}/rooms`)
  return r.json()
}

export async function createRoom(payload) {
  const r = await fetch(`${API_BASE}/rooms`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  return r.json()
}

export async function updateRoom(id, payload) {
  const r = await fetch(`${API_BASE}/rooms/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  return r.json()
}

export async function deleteRoom(id) {
  await fetch(`${API_BASE}/rooms/${id}`, { method: 'DELETE' })
}

export async function createBooking(payload) {
  const r = await fetch(`${API_BASE}/bookings`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  if (!r.ok) throw await r.json()
  return r.json()
}

export async function fetchBookingsSummary() {
  const r = await fetch(`${API_BASE}/bookings/summary`)
  return r.json()
}
