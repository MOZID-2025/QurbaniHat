"use client";

import { toast } from "react-toastify";

const BookingForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success("Booking successful!");
    e.target.reset();
  };

  return (
    <div className="bg-white rounded-3xl shadow-lg p-8">
      <h2 className="text-2xl font-bold mb-2">Book This Animal</h2>

      <p className="text-gray-500 mb-6">
        Fill the form to confirm your booking.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          required
          placeholder="Your Name"
          className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500"
        />

        <input
          type="email"
          required
          placeholder="Email"
          className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500"
        />

        <input
          type="tel"
          required
          placeholder="Phone"
          className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500"
        />

        <textarea
          required
          rows="4"
          placeholder="Address"
          className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500"
        />

        <button className="w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-xl font-semibold">
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
