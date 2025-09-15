import { useParams, Link, useNavigate } from "react-router-dom"
import * as api from '../api'
import { useEffect, useState } from "react"
import BookingForm from "../components/BookingForm";

export default function RoomDetails() {
  const { id } = useParams()
  const navigate = useNavigate();
  const [room, setRoom] = useState({});
  const [loading, setLoading] = useState(true)
  const [showBook, setShowBook] = useState(false)
  const [availability, setAvaliability]=useState(false)
 async function load(){
    setLoading(true)
   const data = await api.fetchRoom(id)
   
   console.log(data)
   if (!data.error) {
     console.log("hello")
     setRoom(data)
     setAvaliability(data.available)
     setLoading(false)
   }
  }
  useEffect(()=>{ load() }, [id])
  if (loading) {
    return (
      <div>Loading...</div>
    )
  }

  const handleDelete = async() => {
    {
      const res = await api.deleteRoom(room._id)
      navigate("/rooms") // go back to room list
    }
  }

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-2xl font-bold text-indigo-600 mb-4">
        Room {room.roomNo} — {room.type}
      </h2>
      <p className="mb-2">{room.description}</p>
      <p><strong>Beds:</strong> {room.beds}</p>
      <p><strong>Price:</strong> ${room.pricePerNight}/night</p>
      <p>
        <strong>Status:</strong>{" "}
        {availability ? (
          <span className="text-green-600">Available</span>
        ) : (
          <span className="text-red-600">Booked</span>
        )}
      </p>

      <div className="mt-6 flex gap-3">
        {/* Edit button */}
        <Link
          to={`/edit-room/${room._id}`}
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
        >
          Edit
        </Link>

        {/* Delete button */}
        <button onClick={() => { if (confirm('Delete room?')) handleDelete() }} className="px-3 py-1 rounded border text-red-600">Delete</button>
        {
          availability && (
                <button onClick={() => {setShowBook(!showBook)}} className="px-3 py-1 rounded border bg-green-700 text-white">Book</button>
            )
        }
        
        
      </div>
        {
          showBook && (
            <BookingForm room={room} setAvaliability={setAvaliability} setShoBook={setShowBook} ></BookingForm>
          )
        } 
    </div>
  )
}
