import React, { useEffect } from 'react'
import { useState } from 'react';
import RoomForm from '../components/RoomForm'
import * as api from '../api'

export default function CreateRoom(){
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  useEffect(() => {
    setSuccess(false);
    setError(false);
    setErrorMsg("");
  },[])
  async function handleSubmit(values) {
    const res = await api.createRoom(values)
    if (!res.error) {
      setSuccess(true);
      setError(false)
    }
    else {
      console.log(res.error)
      setError(true)
      setSuccess(false)
      setErrorMsg(res.error)
    }
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Create Room</h1>
       {success && (
        <div className="mb-4 p-3 rounded bg-green-100 text-green-700">
          Room successfully created!
        </div>
      )}
       {error && (
        <div className="mb-4 p-3 rounded bg-red-100 text-red-700">
          Something went wrong. {errorMsg}
        </div>
      )}
      <RoomForm onSubmit={handleSubmit} />
    </div>
  )
}
