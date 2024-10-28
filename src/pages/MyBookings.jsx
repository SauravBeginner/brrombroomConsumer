import React, { useEffect, useState } from "react";
import bookingService from "../appwrite/booking";
import { ArrowRight } from "lucide-react";
import authService from "../appwrite/auth";
import { useAuth } from "../context/AuthContext";
import Loader from "../components/Loader";

// MyBookings component
const MyBookings = () => {
  const { user } = useAuth();

  const [userId, setUserId] = useState("");
  const [myBookings, setMyBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const checkAuth = async () => {
    try {
      const user = await authService.getCurrentUser();
      setUserId(user?.$id);
      console.log("User: " + user?.$id);
    } catch (error) {
      console.error("Authentication failed!", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("user context", user);
    // checkAuth();
    fetchUpcomingBookings();
  }, []);

  const fetchUpcomingBookings = async () => {
    setLoading(true);
    setError("");
    try {
      const bookings = await bookingService.getMyBookings({
        userId: user?.$id,
      });
      setMyBookings(bookings?.documents);
      console.log("bookings", bookings);
      setLoading(false);
    } catch (error) {
      setError("Error fetching upcoming bookings: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loader />;

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">My Bookings</h1>
      {myBookings.map((ride) => (
        <div
          key={ride?.$id}
          className="bg-white rounded-lg shadow-md p-4 mb-4 flex"
        >
          {/* Car Image */}
          <img
            src={
              ride.imageUrl ||
              "https://jsak.mmtcdn.com/cabs_cdn_dt/image/Cab_Images/sedan.png"
            }
            alt={ride.carModel}
            className="w-32 h-28 object-cover rounded-lg mr-4"
          />
          <div className="flex-grow">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold">
                  {ride.carModel || ride.carType}
                  <span className="text-sm font-normal text-gray-600">
                    or similar
                  </span>
                </h2>
                <div className="flex items-center mt-1">
                  {/* <span className="bg-green-500 text-white px-2 py-1 rounded text-sm mr-2">
                    {ride.rating}/5
                  </span> */}
                  <span className="text-gray-600">{ride.pickupLocation}</span>
                  <span className="p-2">
                    <ArrowRight size={16} />
                  </span>

                  <span className="text-gray-600">{ride.dropoffLocation}</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-2xl font-bold">
                  ₹{ride.price || 1485}
                </span>
                <p className="text-sm text-gray-600">
                  + ₹{ride.additionalCharges} (Other Charges)
                </p>
              </div>
            </div>
            <div className="mt-2 text-sm text-gray-600">
              <p>
                {ride.carType} | {ride.seats} Seats |{" "}
                {ride.hasAC ? "AC" : "No AC"} | {ride.numPassengers} Person
              </p>
              <p>
                {ride.includedKm} kms included | ₹{ride.extraKmCharge}/km after{" "}
                {ride.includedKm} kms
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default MyBookings;
