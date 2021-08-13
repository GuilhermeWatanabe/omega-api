import { Injectable } from "@nestjs/common";
import { User } from "src/model/user.model";

@Injectable()
export class UserService {

    private users: Array<User> = [];

    getAll(): User[] {
        return this.users;
    }

    create(user: User) {
        this.users.push(user);

        user.public_id = 'hash do id publico';

        return {
            user: user,
            access_token: "qualquer token"
        };
    }
}