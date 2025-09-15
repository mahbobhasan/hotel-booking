import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-indigo-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to Our Hotel Booking System
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Manage rooms, create bookings, and view summaries — all in one place.
          </p>
          <Link
            to="/rooms"
            className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow hover:bg-gray-100"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Information Section */}
      <section className="flex-1 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h3 className="text-xl font-semibold mb-2">Room Management</h3>
            <p className="text-gray-600">
              Easily add, edit, or delete rooms with just a few clicks.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h3 className="text-xl font-semibold mb-2">Quick Bookings</h3>
            <p className="text-gray-600">
              Book rooms instantly with guest details and availability check.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h3 className="text-xl font-semibold mb-2">Booking Summary</h3>
            <p className="text-gray-600">
              Get a clear overview of all bookings and nights booked.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-200 py-6 text-center">
        <p>&copy; {new Date().getFullYear()} Hotel Booking System. All rights reserved.</p>
      </footer>
    </div>
  )
}
