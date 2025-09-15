import React, { useEffect, useState } from 'react'
import * as api from '../api'

export default function BookingForm({ room, setAvaliability,setShoBook }){
  const [guestName, setGuestName] = useState('')
  const [nights, setNights] = useState(1)
  const [checkInDate, setCheckin] = useState('')
  const [error, setError] = useState(null)
  const [price, setPrice] = useState(0);
  const today = new Date().toISOString().split("T")[0]
  useEffect(() => {
    setPrice(room.pricePerNight)
  },[])

  async function handleSubmit(e){
    e.preventDefault()
    setError(null)
    if (!room.available) return setError('Room is unavailable')
    if (!guestName || !checkInDate || nights < 1) return setError('Fill all fields')
    if (checkInDate < today) {
      setError("Check-in date cannot be in the past.")
      return
    }
    try{
      await api.createBooking({ roomId: room._id, guestName, nights, checkInDate })
      setAvaliability(false)
      setShoBook(false)
    }catch(err){
      setError(err.error || 'Error creating booking')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="p-3 border rounded bg-gray-50">
      {error && <div className="text-red-600 text-sm mb-2">{error}</div>}
      <div className="mt-2 grid grid-cols-2 gap-2">
        <label className="block text-sm">Guest Name
          <input value={guestName} onChange={e=>setGuestName(e.target.value)} className="mt-1 w-full p-2 border rounded" />
        </label>
        <p className='text-right font-medium shadow-sm'>Price: { price } Taka</p>
      </div>

      <div className="mt-2 grid grid-cols-2 gap-2">
        <label className="text-sm">Nights
          <input type="number" min={1} value={nights} onChange={e => { setNights(Number(e.target.value));  setPrice(e.target.value*room.pricePerNight)}} className="mt-1 w-full p-2 border rounded" />
        </label>
        <label className="text-sm">Check-in
          <input type="date" value={checkInDate} onChange={e=>setCheckin(e.target.value)} className="mt-1 w-full p-2 border rounded" />
        </label>
      </div>

      <div className="mt-3 flex gap-2">
        <button className="px-3 py-1 bg-green-600 text-white rounded">Confirm</button>
      </div>
    </form>
  )
}
