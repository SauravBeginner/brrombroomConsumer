import React, { useEffect, useState } from "react";
import bookingService from "../appwrite/booking"; // Import the BookingService
import authService from "../appwrite/auth";
import { useAuth } from "../context/AuthContext";

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    pickupLocation: "",
    dropoffLocation: "",
    pickupDate: "",
    returnDate: "",
    numPassengers: "",
    carType: "",
    // specialRequests: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleInputChange = (event) => {
    const { id, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };
  const [loading, setLoading] = useState(false);

  const { user } = useAuth();
  const handleSubmit = async (event) => {
    event.preventDefault();
    // Handle form submission logic here

    setLoading(true);
    setError("");
    setSuccess("");

    const bookingData = {
      ...formData,
      userId: user?.$id, // Include the user ID in the booking data
      status: "pending",
    };
    try {
      await bookingService.createBooking(bookingData);
      setSuccess("Booking successfully created!");
      // setFormData({
      //   name: "",
      //   email: "",
      //   phone: "",
      //   pickupLocation: "",
      //   dropoffLocation: "",
      //   pickupDate: "",
      //   returnDate: "",
      //   numPassengers: "",
      //   carType: "",
      //   specialRquests: "",
      // });
      // alert("Booking Successful!");
      console.log("bookingData", formData);
    } catch (error) {
      setError("Error creating booking: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h5 className="text-lg font-semibold mb-4">Car Booking Form</h5>

      {/* Car Booking Form */}
      <form
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
        onSubmit={handleSubmit}
      >
        <div className="col-span-1">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Your Name
          </label>
          <input
            type="text"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="col-span-1">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="col-span-1">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Phone Number
          </label>
          <input
            type="tel"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="col-span-1">
          <label
            htmlFor="pickupLocation"
            className="block text-sm font-medium text-gray-700"
          >
            Pickup Location
          </label>
          <input
            type="text"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="pickupLocation"
            value={formData.pickupLocation}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="col-span-1">
          <label
            htmlFor="dropoffLocation"
            className="block text-sm font-medium text-gray-700"
          >
            Drop-off Location
          </label>
          <input
            type="text"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="dropoffLocation"
            value={formData.dropoffLocation}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="col-span-1">
          <label
            htmlFor="pickupDate"
            className="block text-sm font-medium text-gray-700"
          >
            Pickup Date
          </label>
          <input
            type="date"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="pickupDate"
            value={formData.pickupDate}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="col-span-1">
          <label
            htmlFor="returnDate"
            className="block text-sm font-medium text-gray-700"
          >
            Return Date
          </label>
          <input
            type="date"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="returnDate"
            value={formData.returnDate}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="col-span-1">
          <label
            htmlFor="numPassengers"
            className="block text-sm font-medium text-gray-700"
          >
            Number of Passengers
          </label>
          <input
            type="number"
            min="1"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="numPassengers"
            value={formData.numPassengers}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="col-span-1">
          <label
            htmlFor="carType"
            className="block text-sm font-medium text-gray-700"
          >
            Car Type
          </label>
          <select
            id="carType"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.carType}
            onChange={handleInputChange}
            required
          >
            <option value="" disabled selected>
              Choose...
            </option>
            <option value={"suv"}>SUV</option>
            <option value={"sedan"}>Sedan</option>
            <option value={"minivan"}>Minivan</option>
            {/* <option value={"convertible"}>Convertible</option> */}
          </select>
        </div>

        <div className="col-span-2 text-center">
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            {loading ? "Booking..." : "Book Now"}
          </button>
          <button
            type="reset"
            className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 ml-4"
            onClick={() => {
              setFormData({
                name: "",
                email: "",
                phone: "",
                pickupLocation: "",
                dropoffLocation: "",
                pickupDate: "",
                returnDate: "",
                numPassengers: "",
                carType: "",
                specialRquests: "",
              });
            }}
          >
            Reset
          </button>
        </div>
      </form>
      {/* End Car Booking Form */}
    </div>
  );
};

export default Booking;
