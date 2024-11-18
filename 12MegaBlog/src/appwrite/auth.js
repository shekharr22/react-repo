import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);                                        
    }   

    async createAccount() {
        try {
            const userAccount = await this.account.create(ID.unique(), "shekharjadhav25@gmail.com", "maxdev78785", "shekhar");

            if (userAccount) {
                return this.login({ email, password });
            } else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login() {
        try {
            return await this.account.createEmailPasswordSession("shekharjadhav25@gmail.com", "maxdev78785");
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            console.log( this.account, ID)
            return await this.account.get();
        } catch (error) {
              console.log("Appwrite service :: getCurrentUser :: error", error);
        }

        return null;
    }

    async logout() {
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error);
        }
    }
}  

const authService = new AuthService();

export default authService;
