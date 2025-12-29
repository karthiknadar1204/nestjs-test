import { Injectable } from '@nestjs/common';
import { RegisterDto } from 'src/auth/dto/registerUser.dto';
@Injectable()
export class UserService {
    createUser(registerUserDto: RegisterDto){
        console.log(registerUserDto)
        return {message: `User created ${registerUserDto.fname} ${registerUserDto.lname}`}
    }
}
