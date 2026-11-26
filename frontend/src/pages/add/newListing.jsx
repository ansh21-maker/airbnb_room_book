import React, { useState } from "react";

const API_URL = "http://localhost:9000/api/listing/create-listing";

const CATEGORIES = [
  "Rooms",
  "Amazing Views",
  "Beachfront",
  "Mountains",
  "Cabins",
  "Farms",
  "Castles",
  "Camping",
];

const EMPTY_FORM = {
  title: "",
  description: "",
  location: "",
  country: "",
  price: "",
  image: "",
  category: "",
};

export const NewListing = () => {
  const [create, setCreate] = useState(EMPTY_FORM);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // { type: "success" | "error", message }

  function handleChange(e) {
    const { name, value } = e.target;
    setCreate((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...create, price: Number(create.price) }),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus({
          type: "error",
          message: data.message || "Could not save the listing.",
        });
        return;
      }

      setStatus({ type: "success", message: "Listing created." });
      setCreate(EMPTY_FORM);
    } catch (error) {
      setStatus({
        type: "error",
        message: "Could not reach the server. Check that it is running.",
      });
    } finally {
      setLoading(false);
    }
  }

  const inputStyle =
    "w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-black focus:ring-1 focus:ring-black transition";

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-200">
        <h1 className="text-3xl font-semibold text-gray-900">
          Create a new listing
        </h1>

        <p className="text-gray-500 mt-2 mb-8">
          Share your place with the world and start earning.
        </p>

        {status && (
          <div
            role="status"
            className={`mb-6 rounded-lg px-4 py-3 text-sm ${
              status.type === "success"
                ? "bg-green-50 text-green-800 border border-green-200"
                : "bg-red-50 text-red-800 border border-red-200"
            }`}
          >
            {status.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="title" className="block font-medium mb-2">
              Listing Title
            </label>
            <input
              id="title"
              type="text"
              name="title"
              value={create.title}
              onChange={handleChange}
              placeholder="Give your place a catchy title"
              className={inputStyle}
              required
            />
          </div>

          <div>
            <label htmlFor="description" className="block font-medium mb-2">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={create.description}
              onChange={handleChange}
              placeholder="Describe what makes your place special..."
              rows={5}
              className={inputStyle}
              required
            />
          </div>

          <div>
            <label htmlFor="location" className="block font-medium mb-2">
              Location
            </label>
            <input
              id="location"
              type="text"
              name="location"
              value={create.location}
              onChange={handleChange}
              placeholder="Enter city or location"
              className={inputStyle}
              required
            />
          </div>

          <div>
            <label htmlFor="country" className="block font-medium mb-2">
              Country
            </label>
            <input
              id="country"
              type="text"
              name="country"
              value={create.country}
              onChange={handleChange}
              placeholder="Enter country"
              className={inputStyle}
              required
            />
          </div>

          <div>
            <label htmlFor="category" className="block font-medium mb-2">
              Property Category
            </label>
            <select
              id="category"
              name="category"
              value={create.category}
              onChange={handleChange}
              className={inputStyle}
              required
            >
              <option value="">Select category</option>
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="price" className="block font-medium mb-2">
              Price per night (₹)
            </label>
            <input
              id="price"
              type="number"
              name="price"
              value={create.price}
              onChange={handleChange}
              placeholder="Enter price"
              min="1"
              className={inputStyle}
              required
            />
          </div>

          <div>
            <label htmlFor="image" className="block font-medium mb-2">
              Image URL
            </label>
            <input
              id="image"
              type="url"
              name="image"
              value={create.image}
              onChange={handleChange}
              placeholder="Paste your property image URL"
              className={inputStyle}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-rose-500 hover:bg-rose-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-lg transition duration-200"
          >
            {loading ? "Saving..." : "Create Listing"}
          </button>
        </form>
      </div>
    </div>
  );
};
