// src/App.jsx
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Rooms from "./pages/Rooms"
import CreateRoom from "./pages/CreateRoom"
import EditRoom from "./pages/EditRoom"
import BookingSummary from "./pages/BookingSummary"
import RoomDetails from "./pages/RoomDetails"

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      
      <main className="flex-1 p-4 max-w-6xl mx-auto w-full">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/rooms/:id" element={<RoomDetails />} />
          <Route path="/create-room" element={<CreateRoom />} />
          <Route path="/edit-room/:id" element={<EditRoom />} />
          <Route path="/booking-summary" element={<BookingSummary />} />
        </Routes>
        
      </main>
    </div>
  )
}

export default App
