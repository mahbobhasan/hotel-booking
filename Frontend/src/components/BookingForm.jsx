import React, { useState } from 'react'
import * as api from '../api'

export default function BookingForm({ room, onDone, onReload }){
  const [guestName, setGuestName] = useState('')
  const [nights, setNights] = useState(1)
  const [checkin, setCheckin] = useState('')
  const [error, setError] = useState(null)

  async function handleSubmit(e){
    e.preventDefault()
    setError(null)
    if (!room.available) return setError('Room is unavailable')
    if (!guestName || !checkin || nights < 1) return setError('Fill all fields')

    try{
      await api.createBooking({ roomId: room.id, guestName, nights, checkin })
      if (onReload) await onReload()
      if (onDone) onDone()
    }catch(err){
      setError(err.error || 'Error creating booking')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="p-3 border rounded bg-gray-50">
      {error && <div className="text-red-600 text-sm mb-2">{error}</div>}

      <label className="block text-sm">Guest Name
        <input value={guestName} onChange={e=>setGuestName(e.target.value)} className="mt-1 w-full p-2 border rounded" />
      </label>

      <div className="mt-2 grid grid-cols-2 gap-2">
        <label className="text-sm">Nights
          <input type="number" min={1} value={nights} onChange={e=>setNights(Number(e.target.value))} className="mt-1 w-full p-2 border rounded" />
        </label>
        <label className="text-sm">Check-in
          <input type="date" value={checkin} onChange={e=>setCheckin(e.target.value)} className="mt-1 w-full p-2 border rounded" />
        </label>
      </div>

      <div className="mt-3 flex gap-2">
        <button className="px-3 py-1 bg-green-600 text-white rounded">Confirm</button>
        <button type="button" onClick={() => onDone && onDone()} className="px-3 py-1 border rounded">Cancel</button>
      </div>
    </form>
  )
}
