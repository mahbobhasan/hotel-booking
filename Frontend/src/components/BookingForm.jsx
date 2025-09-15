import React, { useEffect, useState } from "react"
import * as api from "../api"

export default function BookingForm({ room, setAvaliability, setShoBook }) {
  const [guestName, setGuestName] = useState("")
  const [nights, setNights] = useState(1)
  const [checkInDate, setCheckin] = useState("")
  const [error, setError] = useState(null)
  const [price, setPrice] = useState(0)
  const today = new Date().toISOString().split("T")[0]
  useEffect(() => {
    setPrice(room.pricePerNight)
  }, [room.pricePerNight])
  async function handleSubmit(e) {
    e.preventDefault()
    setError(null)
    if (!room.available) return setError("Room is unavailable")
    if (!guestName || !checkInDate || nights < 1)
      return setError("Fill all fields")
    if (checkInDate < today) {
      setError("Check-in date cannot be in the past.")
      return
    }
    try {
      await api.createBooking({
        roomId: room._id,
        guestName,
        nights,
        checkInDate,
      })
      setAvaliability(false)
      setShoBook(false)
    } catch (err) {
      setError(err.error || "Error creating booking")
    }
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-lg rounded-xl p-4 sm:p-6 space-y-5 max-w-lg mx-auto"
    >
      <h3 className="text-lg sm:text-xl font-semibold text-indigo-700 text-center">
        Book Room {room.roomNo}
      </h3>
      {error && (
        <div className="text-red-600 text-sm bg-red-50 border border-red-200 rounded p-2">
          {error}
        </div>
      )}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Guest Name
        </label>
        <input
          value={guestName}
          onChange={(e) => setGuestName(e.target.value)}
          className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-400 text-sm"
          placeholder="Enter guest name"
        />
      </div>

   
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nights
          </label>
          <input
            type="number"
            min={1}
            value={nights}
            onChange={(e) => {
              setNights(Number(e.target.value))
              setPrice(Number(e.target.value) * room.pricePerNight)
            }}
            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-400 text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Check-in Date
          </label>
          <input
            type="date"
            value={checkInDate}
            min={today}
            onChange={(e) => setCheckin(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-400 text-sm"
          />
        </div>
      </div>

      
      <div className="bg-indigo-50 text-indigo-700 font-semibold text-center py-2 rounded-lg shadow-inner">
        Total Price: {price} Taka
      </div>

  
      <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
        <button
          type="submit"
          className="flex-1 sm:flex-none bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition"
        >
          Confirm Booking
        </button>
        <button
          type="button"
          onClick={() => setShoBook(false)}
          className="flex-1 sm:flex-none bg-gray-200 text-gray-700 px-5 py-2 rounded-lg hover:bg-gray-300 transition"
        >
          Cancel
        </button>
      </div>
    </form>
  )
}
