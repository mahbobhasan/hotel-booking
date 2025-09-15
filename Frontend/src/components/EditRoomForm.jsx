import { useState, useEffect } from "react"

export default function EditRoomForm({ initial = {}, onSubmit }) {
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
  }, [initial])

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
      className="my-4 bg-white shadow-lg rounded-xl p-4 sm:p-6 md:p-8 max-w-2xl mx-auto space-y-5"
    >
      <h2 className="text-xl sm:text-2xl font-bold text-indigo-700 text-center">
        Edit Room
      </h2>
      <div className="text-center bg-gray-100 border rounded-lg py-2 px-3 font-medium text-gray-700">
        Room No: {formData.roomNo}
      </div>

      <div>
        <label className="block font-medium mb-1 text-gray-700">Type</label>
        <input
          type="text"
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="w-full border rounded-lg px-3 py-2 text-sm md:text-base focus:ring-2 focus:ring-indigo-400"
          required
        />
      </div>
      <div>
        <label className="block font-medium mb-1 text-gray-700">
          Description
        </label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border rounded-lg px-3 py-2 text-sm md:text-base focus:ring-2 focus:ring-indigo-400"
          rows="3"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block font-medium mb-1 text-gray-700">Beds</label>
          <input
            type="number"
            name="beds"
            value={formData.beds}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 text-sm md:text-base focus:ring-2 focus:ring-indigo-400"
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1 text-gray-700">
            Price per Night ($)
          </label>
          <input
            type="number"
            name="pricePerNight"
            value={formData.pricePerNight}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 text-sm md:text-base focus:ring-2 focus:ring-indigo-400"
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
          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
        />
        <label className="text-sm md:text-base text-gray-700">Available</label>
      </div>


      <div className="text-center">
        <button
          type="submit"
          className="w-full sm:w-auto bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition text-sm md:text-base"
        >
          Save
        </button>
      </div>
    </form>
  )
}
