import { Client, Databases, ID, Query, Storage } from "appwrite";
import conf from "../conf/conf.js";

export class BookingService {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.databases = new Databases(this.client);
    // this.bucket = new Storage(this.client);
  }

  async createBooking({
    name,
    email,
    phone,
    pickupLocation,
    dropoffLocation,
    pickupDate,
    returnDate,
    numPassengers,
    carType,
    specialRequests,
    userId,
    status,
  }) {
    try {
      const uniqueId = ID.unique(); // Generate a unique ID
      console.log("uniqueId", uniqueId);
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteBookingCollectionId,
        uniqueId,
        {
          name,
          email,
          phone,
          pickupLocation,
          dropoffLocation,
          pickupDate,
          returnDate,
          numPassengers,
          carType,
          specialRequests,
          userId,
          status,
        }
      );
    } catch (error) {
      console.log("Appwrite Service :: createBooking error: ", error);
    }
  }

  async getUpcomingBookings(
    queries = [
      //Query.equal("status", "active"),
      Query.limit(25),
      Query.offset(0),
    ]
  ) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteBookingCollectionId,
        queries
      );
    } catch (error) {
      console.log("Appwrite Service :: getCategories error: ", error);
      return false;
    }
  }

  async getMyBookings({ userId }) {
    console.log("Appwrite Service :: getMyBookings userId: ", userId);
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteBookingCollectionId,
        [
          Query.equal("userId", userId), // Filter by the user ID
        ]
      );
    } catch (error) {
      console.log("Appwrite Service :: getCategories error: ", error);
      return false;
    }
  }
}

const bookingService = new BookingService();

export default bookingService;
