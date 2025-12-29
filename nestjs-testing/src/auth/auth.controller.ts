import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
@Controller('auth') // /auth
export class AuthController {
    authService: AuthService
    constructor(authService: AuthService) {
        this.authService = authService
    }
    // /auth/register
    @Post('register')
    register(){
        return this.authService.registerUser()

    }
}
