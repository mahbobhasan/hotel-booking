import React from "react"
import { Link } from "react-router-dom"


export default function RoomCard({ room }) {
  const roomId = room._id || ""

  return (
    <article className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden flex flex-col">
      
      <div className="h-44 sm:h-36 md:h-44 bg-gradient-to-r from-purple-200 via-indigo-200 to-blue-200 flex items-center justify-center">
        <span className="text-gray-600 text-sm font-medium">Room Preview</span>
      </div>

      <div className="p-4 flex-1 flex flex-col">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              Room {room.roomNo}
            </h3>
            <p className="text-sm text-gray-500 mt-1">Type: {room.type || "—"}</p>
          </div>

          <div className="text-right">
            <div className="text-indigo-600 font-semibold">
             BDT {room.pricePerNight ?? "—"}
              <span className="text-xs text-gray-500 font-normal"> /night</span>
            </div>

            <div
              className={`inline-block mt-2 text-xs font-medium px-2.5 py-0.5 rounded-full ${
                room.available
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {room.available ? "Available" : "Unavailable"}
            </div>
          </div>
        </div>
        {room.description && (
          <p className="text-sm text-gray-600 mt-3" style={{ maxHeight: 56, overflow: "hidden" }}>
            {room.description}
          </p>
        )}

 
        <div className="mt-4">
          <Link
            to={`/rooms/${roomId}`}
            className="w-full inline-block text-center bg-indigo-600 text-white text-sm font-medium py-2 px-4 rounded-lg hover:bg-indigo-700 transition"
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  )
}
