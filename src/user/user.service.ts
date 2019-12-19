import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto';
import { UserRO } from './user.interface';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository : Repository<UserEntity>
    ) {

    }

   async findAll(): Promise<UserEntity[]> {
        return await this.userRepository.find();
    }

    // async fineOne()

   async create(dto: CreateUserDto): Promise<UserRO> {
        let newUser = new UserEntity();
        newUser.username = dto.username;
        newUser.email = dto.email;
        newUser.password = dto.password;

       await this.userRepository.save(newUser);
    }

}
