import React, { useEffect, useState } from "react"
import * as api from "../api"

export default function BookingSummary() {
  const [rows, setRows] = useState([])

  useEffect(() => {
    api.fetchBookingsSummary().then(setRows)
  }, [])

  return (
    <div className="p-4 sm:p-6">
      <h1 className="text-2xl sm:text-3xl font-bold text-indigo-700 mb-6 text-center">
        Booking Summary
      </h1>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm sm:text-base">
            <thead className="bg-indigo-50">
              <tr>
                <th className="p-3 text-left font-semibold text-gray-700">
                  Room No
                </th>
                <th className="p-3 text-left font-semibold text-gray-700">
                  Type
                </th>
                <th className="p-3 text-left font-semibold text-gray-700">
                  Total Nights Booked
                </th>
                <th className="p-3 text-left font-semibold text-gray-700">
                  #Bookings
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, idx) => (
                <tr
                  key={r.roomId}
                  className={`border-t hover:bg-indigo-50 transition ${
                    idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                  }`}
                >
                  <td className="p-3 font-medium text-gray-800">
                    {r.roomNo}
                  </td>
                  <td className="p-3 text-gray-700">{r.type}</td>
                  <td className="p-3 text-gray-700">{r.totalNights}</td>
                  <td className="p-3 text-gray-700">{r.bookings}</td>
                </tr>
              ))}
              {rows.length === 0 && (
                <tr>
                  <td
                    colSpan={4}
                    className="p-6 text-center text-gray-500 italic"
                  >
                    No bookings yet 📭
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-6 space-y-4 sm:hidden">
        {rows.length === 0 ? (
          <div className="text-center text-gray-500 italic">
            No bookings yet 📭
          </div>
        ) : (
          rows.map((r) => (
            <div
              key={r.roomId}
              className="bg-white shadow-md rounded-lg p-4 border"
            >
              <div className="flex justify-between mb-2">
                <span className="font-semibold text-indigo-600">
                  Room {r.roomNo}
                </span>
                <span className="text-gray-500 text-sm">#{r.bookings} bookings</span>
              </div>
              <p className="text-gray-700">
                <strong>Type:</strong> {r.type}
              </p>
              <p className="text-gray-700">
                <strong>Total Nights:</strong> {r.totalNights}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
