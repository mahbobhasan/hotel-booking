import React, { useEffect, useState } from "react"
import * as api from "../api"
import RoomCard from "../components/RoomCard"

export default function Rooms() {
  const [rooms, setRooms] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1) 
  const [hasNext, setHasNext] = useState(false)
  const [hasPrev, setHasPrev] = useState(false)

  async function load(p = 1) {
    setLoading(true)
    try {
      const data = await api.fetchRooms(p)
      
      setRooms(data.rooms)
      
      console.log("p=>",p)
      console.log("page",page,"totalpage",data.totalPages)
      console.log(data.totalPages>p)
      setHasNext(data.totalPages>p)
      setHasPrev(p > 1) // enable Prev if page > 1
      setPage(p)
      
    } catch (err) {
      console.error("Error fetching rooms:", err)
    }
    setLoading(false)
  }

  useEffect(() => {
    load(1) 
  }, [])



  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4 text-indigo-700">Rooms</h1>

      {loading ? (
        <div className="text-center text-gray-500">Loading…</div>
      ) : (
        <>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {rooms.map((r) => (
              <RoomCard
                key={r._id}
                room={r}
              />
            ))}
          </div>
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={() => load(page - 1)}
              disabled={!hasPrev}
              className={`px-4 py-2 rounded ${
                hasPrev
                  ? "bg-indigo-600 text-white hover:bg-indigo-700"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              Prev
            </button>
            <span className="px-4 py-2 text-gray-700">Page {page}</span>
            <button
              onClick={() => load(page + 1)}
              disabled={!hasNext}
              className={`px-4 py-2 rounded ${
                hasNext
                  ? "bg-indigo-600 text-white hover:bg-indigo-700"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  )
}
