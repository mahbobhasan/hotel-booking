import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import BookingForm from './BookingForm'

export default function RoomCard({ room }){

  return (
    <div className="bg-white p-4 rounded shadow-sm">
      <div className="flex justify-between items-start  bg-purple-100 p-2 rounded-md">
        <div>
          <div className="text-lg text-gray-600 font-medium">Room {room.roomNo}</div>
          <div className="text-md ">Type: {room.type}</div>
        </div>
        <div className="text-right">
          <div className="text-sm">${room.pricePerNight}/night</div>
          <div className={`mt-2 text-xs px-2 py-1 rounded ${room.available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {room.available ? 'Available' : 'Unavailable'}
          </div>
        </div>
      </div>
        <Link to={`/rooms/${room._id}`} className='rounded-md text-center w-1/2 mx-auto my-2 py-2 bg-blue-700 text-white block'>View Details</Link>

    </div>
  )
}
