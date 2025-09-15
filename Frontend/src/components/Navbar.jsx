import { NavLink } from "react-router-dom"
import { useState } from "react"
import { Menu, X } from "lucide-react" 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const linkClass =
    "block px-3 py-2 rounded hover:bg-indigo-100 text-indigo-600 font-medium"

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="bg-white shadow">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
    
          <NavLink to="/" className="text-xl font-bold text-indigo-600">
            Hotel Booking
          </NavLink>
          <div className="hidden md:flex gap-4">
            <NavLink to="/" className={linkClass}>
              Home
            </NavLink>
            <NavLink to="/rooms" className={linkClass}>
              Rooms
            </NavLink>
            <NavLink to="/create-room" className={linkClass}>
              Add Room
            </NavLink>
            <NavLink to="/booking-summary" className={linkClass}>
              Booking Summary
            </NavLink>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded hover:bg-gray-100 text-indigo-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavLink to="/" className={linkClass} onClick={toggleMenu}>
              Home
            </NavLink>
            <NavLink to="/rooms" className={linkClass} onClick={toggleMenu}>
              Rooms
            </NavLink>
            <NavLink
              to="/create-room"
              className={linkClass}
              onClick={toggleMenu}
            >
              Add Room
            </NavLink>
            <NavLink
              to="/booking-summary"
              className={linkClass}
              onClick={toggleMenu}
            >
              Booking Summary
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  )
}
