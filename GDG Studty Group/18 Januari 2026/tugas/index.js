var UserAccount = /** @class */ (function () {
    function UserAccount(id, username, email) {
        this.id = id;
        this.username = username;
        this.email = email;
    }
    UserAccount.prototype.getProfile = function () {
        console.log("======= User Profile =======");
        console.log("> Username: ".concat(this.username));
        console.log("> Email: ".concat(this.email));
        console.log("============================\n");
    };
    return UserAccount;
}());
var newUser1 = new UserAccount(1, "john_doe", "john@example.com");
var newUser2 = new UserAccount(2, "jane_smith", "jane@example.com");
var newUser3 = new UserAccount(3, "bob_johnson", "bob@example.com");
newUser1.getProfile();
newUser2.getProfile();
newUser3.getProfile();
