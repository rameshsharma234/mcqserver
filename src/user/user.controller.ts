import { Controller, Post, Body, Get } from '@nestjs/common';
import { CreateUserDto, LoginUserDto } from './dto';
import { UserService } from './user.service';
import { UserRO } from './user.interface';

@Controller()
export class UserController {
    constructor(private readonly userService: UserService) {}
    @Get('users')
    async getAll() {
        return await this.userService.findAll();
    }

    @Post('users')
    async create(@Body('user') userData: CreateUserDto) {
       return await this.userService.create(userData);
    }

    @Post('users/login')
    async login(@Body('user') loginUserDto: LoginUserDto):Promise<UserRO>{

    }
}
