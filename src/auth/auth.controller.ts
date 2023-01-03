import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/dto/createUser.dto';
import { User } from '@prisma/client';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('/signup')
  signUp(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.authService.CreateUser(createUserDto);
  }
  @Post('/signin')
  signIn(
    @Body() createUserDto: CreateUserDto,
  ): Promise<{ accessToken: string }> {
    return this.authService.SignIn(createUserDto);
  }
  @Post('/test')
  @UseGuards(AuthGuard())
  test(@Req() req) {
    console.log('request:', req);
  }
}
