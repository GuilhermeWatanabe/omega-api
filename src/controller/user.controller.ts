import { Controller, Get, Post, Body } from "@nestjs/common";
import { User } from "src/model/user.model";
import { UserService } from "src/service/user.service";

@Controller('users')
export class UserController {

    constructor(private userService: UserService) {}

    @Get()
    teste(): User[] {
        return this.userService.getAll();
    }

    @Post()
    create(@Body() user: User ) {
        return this.userService.create(user);
    }
}