import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    registerUser(){
        return {message: 'I am registered'}
    }
}
