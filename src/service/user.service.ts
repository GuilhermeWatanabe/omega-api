import { Injectable } from "@nestjs/common";
import { User } from "src/model/user.model";

@Injectable()
export class UserService {

    private users: Array<User> = [];

    getAll(): User[] {
        //this.repositoy.find();
        return this.users;
    }

    create(user: User) {
        user.public_id = 'hash do id publico';
        
        this.users.push(user);
        //this.repository.save(user);

        return {
            user: user,
            access_token: "qualquer token"
        };
    }
}