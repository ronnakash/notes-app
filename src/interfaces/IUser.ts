export default class User {
    id: string;
    username: string;
    email: string;
    permissions: string;
    token: string;

    constructor (id : string, username: string, email: string, token: string, permissions?: string) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.permissions = permissions? permissions : 'User';
        this.token = token;
    }
}
