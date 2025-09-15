import { useState } from "react"

export default function RoomForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    roomNo: "",
    type: "",
    description: "",
    beds: "",
    pricePerNight: "",
    available: true,
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow rounded-lg p-4 sm:p-6 md:p-8 space-y-4 max-w-2xl mx-auto"
    >
      <h2 className="text-xl md:text-2xl font-bold text-center text-indigo-600">
        Room Details
      </h2>

      
      <div>
        <label className="block font-medium mb-1">Room No</label>
        <input
          type="text"
          name="roomNo"
          value={formData.roomNo}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2 text-sm md:text-base focus:ring-2 focus:ring-indigo-400"
          required
        />
      </div>
      <div>
        <label className="block font-medium mb-1">Type</label>
        <input
          type="text"
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2 text-sm md:text-base focus:ring-2 focus:ring-indigo-400"
          required
        />
      </div>
      <div>
        <label className="block font-medium mb-1">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2 text-sm md:text-base focus:ring-2 focus:ring-indigo-400"
          rows="3"
        ></textarea>
      </div>

     
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block font-medium mb-1">Beds</label>
          <input
            type="number"
            name="beds"
            value={formData.beds}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 text-sm md:text-base focus:ring-2 focus:ring-indigo-400"
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Price per Night ($)</label>
          <input
            type="number"
            name="pricePerNight"
            value={formData.pricePerNight}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 text-sm md:text-base focus:ring-2 focus:ring-indigo-400"
            required
          />
        </div>
      </div>

     
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          name="available"
          checked={formData.available}
          onChange={handleChange}
          className="h-4 w-4 text-indigo-600"
        />
        <label className="text-sm md:text-base">Available</label>
      </div>

     
      <div className="text-center">
        <button
          type="submit"
          className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition text-sm md:text-base"
        >
          Save
        </button>
      </div>
    </form>
  )
}
