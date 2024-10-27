import { Client, Databases, ID, Query, Storage } from "appwrite";
import conf from "../conf/conf.js";

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createProduct({ title, description, status, thumbNail, category }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteProductCollectionId,
        ID.unique(),
        {
          title,
          description,
          status,
          thumbNail,
          category,
        }
      );
    } catch (error) {
      console.log("Appwrite Service :: createProduct error: ", error);
    }
  }

  async updateProduct({ id, title, description, status, thumbNail, category }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteProductCollectionId,
        id,
        {
          title,
          description,
          status,
          thumbNail,
          category,
        }
      );
    } catch (error) {
      console.log("Appwrite Service :: updateProduct error: ", error);
    }
  }

  async deleteProduct(id) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteProductCollectionId,
        id
      );

      return true;
    } catch (error) {
      console.log("Appwrite Service :: deleteProduct error: ", error);
      return false;
    }
  }
  async getProduct(id) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteProductCollectionId,
        id
      );
    } catch (error) {
      console.log("Appwrite Service :: getProduct error: ", error);
      return false;
    }
  }

  async getProducts(
    queries = [
      Query.equal("status", "active"),
      Query.limit(25),
      Query.offset(0),
    ]
  ) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteProductCollectionId,
        queries
      );
    } catch (error) {
      console.log("Appwrite Service :: getProducts error: ", error);
      return false;
    }
  }

  // file upload

  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("Appwrite Service :: uploadFile error: ", error);
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(conf.appwriteBucketId, fileId);
      return true;
    } catch (error) {
      console.log("Appwrite Service :: deleteFile error: ", error);
      return false;
    }
  }

  getFilePreview(fileId) {
    return this.bucket.getFilePreview(conf.appwriteBucketId, fileId);
  }
}

const service = new Service();

export default service;
