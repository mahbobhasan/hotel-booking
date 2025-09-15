import React, { useEffect, useState } from 'react'
import * as api from '../api'
import RoomCard from '../components/RoomCard'

export default function Rooms(){
  const [rooms, setRooms] = useState([])
  const [loading, setLoading] = useState(true)

  async function load(){
    setLoading(true)
    const data = await api.fetchRooms()
    console.log(data)
    setRooms(data.rooms)
    setLoading(false)
  }

  useEffect(()=>{ load() }, [])

  async function removeRoom(id) {
    console.log(id)
    await api.deleteRoom(id)
    setRooms(rooms.filter(r => r._id !== id))
  }

  async function updateRoom(id, payload){
    const updated = await api.updateRoom(id, payload)
    setRooms(rooms.map(r => r._id === id ? updated : r))
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Rooms</h1>
      {loading ? <div>Loading…</div> : (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {rooms.map(r => (
            <RoomCard key={r._id} room={r} onDelete={removeRoom} onUpdate={updateRoom} onReload={load} />
          ))}
        </div>
      )}
    </div>
  )
}
