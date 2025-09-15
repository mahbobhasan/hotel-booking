import { useState, useEffect } from "react"

export default function EditRoomForm({ initial={}, onSubmit }) {
  
  const [formData, setFormData] = useState({
    roomNo: "",
    type: "",
    description: "",
    beds: "",
    pricePerNight: "",
    available: true,
  })
  
  useEffect(() => {
    setFormData(initial)
  },[initial])

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
      className="bg-white shadow rounded-lg p-6 space-y-4"
    >
          <div className="block font-medium text-center  w-1/2 border rounded px-3 py-2 mx-auto">
              Room No: {formData.roomNo}
          </div>  
      <div>
        <label className="block font-medium">Type</label>
        <input
          type="text"
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          required
        />
      </div>

      <div>
        <label className="block font-medium">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          rows="3"
        ></textarea>
      </div>

      <div>
        <label className="block font-medium">Beds</label>
        <input
          type="number"
          name="beds"
          value={formData.beds}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          required
        />
      </div>

      <div>
        <label className="block font-medium">Price per Night ($)</label>
        <input
          type="number"
          name="pricePerNight"
          value={formData.pricePerNight}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          required
        />
      </div>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          name="available"
          checked={formData.available}
          onChange={handleChange}
        />
        <label>Available</label>
      </div>

      <button
        type="submit"
        className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700"
      >
        Save
      </button>
    </form>
  )
}
