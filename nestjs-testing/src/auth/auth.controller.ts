import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
@Controller('auth') // /auth
export class AuthController {
    constructor(private readonly authService: AuthService) {}
    // /auth/register
    @Post('register')
    register(){
        return this.authService.registerUser()

    }
}
