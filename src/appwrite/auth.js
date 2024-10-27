import { Client, Account, ID, OAuthProvider, Teams } from "appwrite";
import conf from "../conf/conf.js";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.account = new Account(this.client);
    this.teams = new Teams(this.client);
  }

  async assignLabel(userId, role) {
    const functionId = "671800f8000c3f6fd7d8";
    try {
      const response = await fetch(
        `${conf.appwriteUrl}/functions/${functionId}/executions`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Appwrite-Project": conf.appwriteProjectId,
            "X-Appwrite-Key": "98fd4...a2ad2", // Use an appropriate API key
          },
          body: JSON.stringify({ userId, roles: [role] }),
        }
      );

      console.log("client response:", response);
      if (!response.ok) {
        throw new Error("Failed to assign label");
      }
      return await response.json();
    } catch (error) {}
  }

  async createAccount({ email, password, name, role }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );

      if (userAccount) {
        // Step 2: Auto-login after signup
        // await this.login({ email, password });
        // // Step 3: Assign the user label based on their role
        // const response = await this.assignLabel(userAccount.$id, role);
        // console.log("Label assignment response:", response);

        // // Step 3: Assign user to the appropriate team based on their role

        // // Return user account details
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }
  async createTeam(teamName) {
    try {
      return await this.teams.create(ID.unique(), teamName);
    } catch (error) {
      console.error("Error creating team:", error);
      throw error;
    }
  }

  async getTeamList() {
    try {
      const teams = await this.teams.list();
      return teams;
    } catch (error) {
      console.error("Error getting team list:", error);
    }
  }
  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  async loginWithGoogle() {
    try {
      const gooleLogin = this.account.createOAuth2Session(
        OAuthProvider.Google,
        "http://localhost:5173",
        "http://localhost:5173/login"
      );
      console.log(gooleLogin);
      return gooleLogin;
    } catch (error) {
      console.log("Appwrite service :: log in with Google :: error: ", error);
    }
  }

  async phoneLogin(number) {
    try {
      return await this.account.createPhoneToken(ID.unique(), number);
    } catch (error) {
      throw error;
    }
  }

  async phoneOTPVerify(otp) {
    try {
      return await this.account.createSession(ID.unique(), otp);
    } catch (error) {
      console.log("Appwrite service :: OTP :: error: ", error);
      return false;
    }
  }
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Appwrite service :: getCurrentUser :: error: ", error);
      return null;
    }
    //  return null;
  }

  async logout() {
    try {
      return this.account.deleteSessions();
    } catch (error) {
      console.log("Appwrite service :: logout :: error: ", error);
    }
    return null;
  }
}

const authService = new AuthService();

export default authService;
