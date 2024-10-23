import { Client, Databases, ID, Query, Storage } from "appwrite";
import conf from "../conf/conf.js";

export class CategoryService {
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

  async createCategory(title) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCategoryCollectionId,
        ID.unique(),
        {
          title,
        }
      );
    } catch (error) {
      console.log("Appwrite Service :: createCategory error: ", error);
    }
  }

  async updateCategory({ id, title }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCategoryCollectionId,
        id,
        {
          title,
        }
      );
    } catch (error) {
      console.log("Appwrite Service :: updateCategory error: ", error);
    }
  }

  async deleteCategory(id) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCategoryCollectionId,
        id
      );

      return true;
    } catch (error) {
      console.log("Appwrite Service :: deleteCategory error: ", error);
      return false;
    }
  }
  async getCategory(id) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCategoryCollectionId,
        id
      );
    } catch (error) {
      console.log("Appwrite Service :: getCategory error: ", error);
      return false;
    }
  }

  async getCategories(
    queries = [
      //Query.equal("status", "active"),
      Query.limit(25),
      Query.offset(0),
    ]
  ) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCategoryCollectionId,
        queries
      );
    } catch (error) {
      console.log("Appwrite Service :: getCategories error: ", error);
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

const categoryService = new CategoryService();

export default categoryService;
