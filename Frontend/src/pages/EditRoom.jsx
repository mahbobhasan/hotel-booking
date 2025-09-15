import React, { useEffect, useState } from 'react'
import RoomForm from '../components/RoomForm'
import * as api from '../api'
import { useParams, useNavigate } from 'react-router-dom'

export default function EditRoom(){
  const { id } = useParams()
  const [room, setRoom] = useState(null)
  const nav = useNavigate()

  useEffect(()=>{
    api.fetchRooms().then(data => {
      const rooms=data.rooms
      const found = rooms.find(r => r._id === id)
      console.log(found)
      if (found) setRoom(found)
    })
  }, [id])
  if (!room) return <div>Loading…</div>

  async function handleSubmit(values){
    await api.updateRoom(id, values)
    alert('Updated')
    nav('/rooms')
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Edit Room</h1>
      <RoomForm initial={room} onSubmit={handleSubmit} />
    </div>
  )
}
