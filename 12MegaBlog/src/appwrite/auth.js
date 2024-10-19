import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
       client = new Client();
       account;

       constructor(){
          this.client
          .setEndpoint(conf.appwriteUrl)
          .setProject(conf.appwriteProjectId)
        
       }

}

    

const AuthService = new AuthService();

export default AuthService;