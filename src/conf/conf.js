const conf = {
  appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
  appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  appwriteProductCollectionId: String(
    import.meta.env.VITE_APPWRITE_PRODUCT_COLLECTION_ID
  ),
  appwriteBookingCollectionId: String(
    import.meta.env.VITE_APPWRITE_BOOKING_COLLECTION_ID
  ),
  appwriteRoleCollectionId: String(
    import.meta.env.VITE_APPWRITE_ROLE_COLLECTION_ID
  ),
  appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
  googleCleintId: String(import.meta.env.VITE_GOOGLE_CLIENT_ID),
  googleClientSecret: String(import.meta.env.VITE_GOOGLE_CLIENT_SECRET),
};

export default conf;
