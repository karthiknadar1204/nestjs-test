import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/registerUser.dto';
@Controller('auth') // /auth
export class AuthController {
    constructor(private readonly authService: AuthService) {}
    // /auth/register
    @Post('register')
    register(@Body() registerUserDto: RegisterDto){
        const result = this.authService.registerUser(registerUserDto)
        return result
    }
}
