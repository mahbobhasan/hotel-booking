import React, { useEffect, useState } from 'react'
import RoomForm from '../components/RoomForm'
import * as api from '../api'
import { useParams, useNavigate } from 'react-router-dom'
import EditRoomForm from '../components/EditRoomForm'

export default function EditRoom(){
  const { id } = useParams()
  const [room, setRoom] = useState(null)
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  useEffect(() => {
    setSuccess(false);
    setError(false);
    setErrorMsg("");
  },[])
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
    const res=await api.updateRoom(id, values)
    if (!res.error) {
      setSuccess(true);
      setTimeout(() => {
      nav(`/rooms/${room._id}`)
    }, 1500)
    }
    else {
      console.log(res)
      console.log(res.error)
      setError(true)
      setErrorMsg(res.error)
    }
    
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Edit Room</h1>
      <EditRoomForm initial={room} onSubmit={handleSubmit} />
      {success && (
        <div className="mb-4 p-3 rounded bg-green-100 text-green-700">
          Room successfully updated!
        </div>
      )}
       {error && (
        <div className="mb-4 p-3 rounded bg-red-100 text-red-700">
          Something went wrong. {errorMsg}
        </div>
      )}
    </div>
  )
}
