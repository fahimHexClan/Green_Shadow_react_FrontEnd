export class AuthData {
    id: string;
    username: string;
    email: string;
    password: string;  // ✅ Added password field
    token?: string; 
  
    constructor(id: string, username: string, email: string, password: string, token?: string) {
      this.id = id;
      this.username = username;
      this.email = email;
      this.password = password; // ✅ Store password
      this.token = token;
    }
}
