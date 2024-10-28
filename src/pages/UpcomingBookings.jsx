import React, { useEffect, useState } from "react";
import bookingService from "../appwrite/booking";
import { ArrowRight } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import Loader from "../components/Loader";

// UpcomingBookings component
const UpcomingBookings = () => {
  const { user } = useAuth();
  const [upcomingBookings, setUpcomingBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchUpcomingBookings();
  }, []);

  const fetchUpcomingBookings = async () => {
    setLoading(true);
    setError("");
    try {
      const bookings = await bookingService.getUpcomingBookings();
      setUpcomingBookings(bookings?.documents);
      console.log("bookings", bookings);
      setLoading(false);
    } catch (error) {
      setError("Error fetching upcoming bookings: " + error.message);
    } finally {
      setLoading(false);
    }
  };
  const handleAccept = async (bookingId) => {
    // Logic to handle ride acceptance (e.g., API call)

    try {
      console.log(driverName);
      await bookingService.assignDriverToBooking({
        bookingId,
        driverId: user?.$id,
        driverName: user?.name,
      });
      if (response) {
        fetchUpcomingBookings();
      }
    } catch (error) {
      console.log("Failed to accept booking");
    }
  };

  const handleReject = async (bookingId) => {
    const response = await bookingService.rejectBooking(bookingId);
    if (response) {
      fetchUpcomingBookings(); // Refresh bookings
    } else {
      console.log("Failed to reject booking");
    }
  };

  if (loading)
    return (
      <div>
        <Loader />
      </div>
    );

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">
        {upcomingBookings?.total <= 0
          ? "No Upcoming Bookings"
          : "Upcoming Bookings"}
      </h1>
      {upcomingBookings.map((ride) => (
        <div
          key={ride?.$id}
          className="bg-white rounded-lg shadow-md p-4 mb-4 flex"
        >
          {/* Car Image */}
          <img
            src={
              ride?.imageUrl ||
              "https://jsak.mmtcdn.com/cabs_cdn_dt/image/Cab_Images/sedan.png"
            }
            alt={ride?.carModel}
            className="w-32 h-28 object-cover rounded-lg mr-4"
          />
          <div className="flex-grow">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold">
                  {ride?.carModel || ride?.carType.toUpperCase()}
                  <span className="text-sm font-normal text-gray-600">
                    {" "}
                    or Similar
                  </span>
                </h2>
                <h3 className="text-xl font-semibold">{ride?.name}</h3>
                <div className="flex items-center mt-1">
                  {/* <span className="bg-green-500 text-white px-2 py-1 rounded text-sm mr-2">
                    {ride?.rating}/5
                  </span> */}
                  <span className="text-gray-600">{ride?.pickupLocation}</span>
                  <span className="p-2">
                    <ArrowRight size={16} />
                  </span>

                  <span className="text-gray-600">{ride?.dropoffLocation}</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-2xl font-bold">
                  ₹{ride?.price || 1485}
                </span>
                <p className="text-sm text-gray-600">
                  + ₹{ride?.additionalCharges} (Other Charges)
                </p>
              </div>
            </div>
            <div className="mt-2 text-sm text-gray-600">
              <p>
                {ride?.carType.toUpperCase()} | {ride?.seats} Seats |{" "}
                {ride.hasAC ? "AC" : "No AC"} | {ride.numPassengers} Person{" "}
              </p>
              <p>
                {ride?.includedKm} kms included | ₹{ride?.extraKmCharge}/km
                after {ride?.includedKm} kms
              </p>
            </div>
            <div className="mt-4 flex justify-end space-x-2">
              <button
                onClick={() => handleReject(ride?.$id)}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300"
              >
                Reject
              </button>
              <button
                onClick={() => handleAccept(ride?.$id)}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default UpcomingBookings;
