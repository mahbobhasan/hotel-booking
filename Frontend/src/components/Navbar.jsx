import { NavLink } from "react-router-dom"

export default function Navbar() {
  const linkClass =
    "px-3 py-2 rounded hover:bg-indigo-100 text-indigo-600 font-medium"

  return (
    <nav className="bg-white shadow p-4">
      <div className="max-w-6xl mx-auto flex gap-4">
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
    </nav>
  )
}
