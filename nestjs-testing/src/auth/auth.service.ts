import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { RegisterDto } from './dto/registerUser.dto';
import bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService) {}
    async registerUser(registerUserDto: RegisterDto){
        console.log(registerUserDto)
        const saltRounds = 10;
        const hash = await bcrypt.hash(registerUserDto.password, saltRounds);
        // Logic for user register
        /**
         * 1. v check if email already exists
         * 2. v hash the password
         * 3. v store the user into db
         * 4. generate jwt token
         * 5. send token in response
         */
        return this.userService.createUser({...registerUserDto, password: hash})
    }
}
