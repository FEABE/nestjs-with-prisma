import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/dto/createUser.dto';
import { User } from '@prisma/client';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('/signup')
  signUp(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.authService.CreateUser(createUserDto);
  }
}
