import { Client, Databases, ID, Query } from "appwrite";
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

  subscribeToBookings(callback) {
    const subscription = this.client.subscribe(
      `documents.${conf.appwriteDatabaseId}.${conf.appwriteBookingCollectionId}`,
      (response) => {
        // Check if the response is for a new document creation
        if (response.events.includes("documents.create")) {
          console.log("New booking event received:", response); // Log the new booking event
          callback(response);
        }
      }
    );
    return () => {
      subscription(); // Unsubscribe from events when done
    };
  }
  async getUpcomingBookings() {
    // queries = [
    //   // Query.equal("status", "pending"),
    //   // Query.limit(25),
    //   // Query.offset(0),
    // ];
    try {
      const response = await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteBookingCollectionId,
        [
          Query.equal("status", "pending"), // Filter by the user ID
        ]
        // queries
      );
      console.log(response);
      return response;
    } catch (error) {
      console.log("Appwrite Service :: getCategories error: ", error);
      return false;
    }
  }
  // bookingService.js

  async assignDriverToBooking({ bookingId, driverId, driverName }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteBookingCollectionId,
        bookingId,
        {
          driverId,
          driverName,
          status: "accepted", // optional status change to reflect assignment
        }
      );
    } catch (error) {
      console.log("Appwrite Service :: assignDriverToBooking error: ", error);
      throw error;
    }
  }

  async acceptBooking(id) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteBookingCollectionId,
        id,
        { status: "accepted" }
      );
    } catch (error) {
      console.log("Appwrite Service :: acceptBooking error: ", error);
      return false;
    }
  }

  async rejectBooking(id) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteBookingCollectionId,
        id,
        { status: "rejected" }
      );
    } catch (error) {
      console.log("Appwrite Service :: rejectBooking error: ", error);
      return false;
    }
  }
  async getAcceptedBookingsByDriver(driverId) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteBookingCollectionId,
        [
          Query.equal("status", "accepted"), // Only accepted bookings
          Query.equal("driverId", driverId), // Only bookings assigned to this driver
        ]
      );
    } catch (error) {
      console.log(
        "Appwrite Service :: getAcceptedBookingsByDriver error: ",
        error
      );
      return false;
    }
  }
}

const bookingService = new BookingService();

export default bookingService;
