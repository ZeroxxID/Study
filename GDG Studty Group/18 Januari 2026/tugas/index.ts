interface User {
    id: number;
    username: string;
    email: string;
}

class UserAccount implements User {
    id: number;
    username: string;
    email: string;

    constructor(id: number, username: string, email: string) {
        this.id = id;
        this.username = username;
        this.email = email;
    }

    getProfile(): void {
        console.log(`======= User Profile =======`);
        console.log(`> Username: ${this.username}`);
        console.log(`> Email: ${this.email}`);
        console.log(`============================\n`);
        
    }
}

const newUser1 = new UserAccount(1, "john_doe", "john@example.com");
const newUser2 = new UserAccount(2, "jane_smith", "jane@example.com");
const newUser3 = new UserAccount(3, "bob_johnson", "bob@example.com");
newUser1.getProfile();
newUser2.getProfile();
newUser3.getProfile();