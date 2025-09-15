import React, { useEffect, useState } from 'react'
import * as api from '../api'

export default function BookingSummary(){
  const [rows, setRows] = useState([])

  useEffect(()=>{ api.fetchBookingsSummary().then(setRows) }, [])

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Booking Summary</h1>
      <div className="bg-white rounded shadow overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-3">Room No</th>
              <th className="p-3">Type</th>
              <th className="p-3">Total Nights Booked</th>
              <th className="p-3">#Bookings</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(r => (
              <tr key={r.roomId} className="border-t">
                <td className="p-3">{r.roomNo}</td>
                <td className="p-3">{r.type}</td>
                <td className="p-3">{r.totalNights}</td>
                <td className="p-3">{r.bookings}</td>
              </tr>
            ))}
            {rows.length===0 && <tr><td colSpan={4} className="p-4 text-center text-gray-500">No bookings yet</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  )
}
