import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import BookingForm from './BookingForm'

export default function RoomCard({ room, onDelete, onUpdate, onReload }){
  const [showBook, setShowBook] = useState(false)

  return (
    <div className="bg-white p-4 rounded shadow-sm">
      <div className="flex justify-between items-start  bg-purple-100 p-2 rounded-md">
        <div>
          <div className="text-lg text-gray-600 font-medium">Room {room.roomNo}</div>
          <h3>Description</h3>
          <p className='text-sm text-gray-500'>{room.description}</p>
          <div className="text-md ">Type: {room.type}</div>
        </div>
        <div className="text-right">
          <div className="text-sm">${room.pricePerNight}/night</div>
          <div className={`mt-2 text-xs px-2 py-1 rounded ${room.available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {room.available ? 'Available' : 'Unavailable'}
          </div>
        </div>
      </div>

      <div className="mt-3 text-sm text-gray-600">Beds: {room.beds}</div>

      <div className="mt-4 flex gap-2">
        <button onClick={() => setShowBook(!showBook)} className="px-3 py-1 rounded bg-indigo-600 text-white">Book</button>
        <Link to={`/edit-room/${room._id}`} className="px-3 py-1 rounded border">Edit</Link>
        <button onClick={() => { if (confirm('Delete room?')) onDelete(room._id) }} className="px-3 py-1 rounded border text-red-600">Delete</button>
      </div>

      {showBook && <div className="mt-3">
        <BookingForm room={room} onDone={() => setShowBook(false)} onReload={onReload} />
      </div>}
    </div>
  )
}
