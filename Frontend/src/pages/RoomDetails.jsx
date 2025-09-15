import { useParams, Link, useNavigate } from "react-router-dom"
import * as api from "../api"
import { useEffect, useState } from "react"
import BookingForm from "../components/BookingForm"

export default function RoomDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [room, setRoom] = useState({})
  const [loading, setLoading] = useState(true)
  const [showBook, setShowBook] = useState(false)
  const [availability, setAvaliability] = useState(false)

  async function load() {
    setLoading(true)
    const data = await api.fetchRoom(id)
    if (!data.error) {
      setRoom(data)
      setAvaliability(data.available)
      setLoading(false)
    }
  }

  useEffect(() => {
    load()
  }, [id])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-40 text-gray-500">
        Loading...
      </div>
    )
  }

  const handleDelete = async () => {
    const res = await api.deleteRoom(room._id)
    navigate("/rooms") // go back to room list
  }

  return (
    <div className="bg-white shadow-lg rounded-xl p-4 sm:p-6 md:p-8 max-w-3xl mx-auto mt-6">
  
      <div className="mb-6 border-b pb-4">
        <h2 className="text-xl sm:text-2xl font-bold text-indigo-700">
          Room {room.roomNo} — {room.type}
        </h2>
        <p className="mt-2 text-gray-600">{room.description}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 mb-6">
        <p>
          <span className="font-semibold">Beds:</span> {room.beds}
        </p>
        <p>
          <span className="font-semibold">Price:</span> BDT {room.pricePerNight}/night
        </p>
        <p className="sm:col-span-2">
          <span className="font-semibold">Status:</span>{" "}
          {availability ? (
            <span className="text-green-600 font-medium">Available</span>
          ) : (
            <span className="text-red-600 font-medium">Booked</span>
          )}
        </p>
      </div>

      {/* Action buttons */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          to={`/edit-room/${room._id}`}
          className="flex-1 text-center bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition"
        >
          Edit
        </Link>

        <button
          onClick={() => {
            if (confirm("Delete room?")) handleDelete()
          }}
          className="flex-1 text-center px-4 py-2 rounded-lg border border-red-500 text-red-600 hover:bg-red-50 transition"
        >
          Delete
        </button>

        {availability && (
          <button
            onClick={() => {
              setShowBook(!showBook)
            }}
            className="flex-1 text-center px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition"
          >
            {showBook ? "Cancel Booking" : "Book"}
          </button>
        )}
      </div>

      {/* Booking form */}
      {showBook && (
        <div className="mt-6">
          <BookingForm
            room={room}
            setAvaliability={setAvaliability}
            setShoBook={setShowBook}
          />
        </div>
      )}
    </div>
  )
}
