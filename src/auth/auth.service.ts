import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { User } from '@prisma/client';
import { CreateUserDto } from 'src/dto/createUser.dto';

@Injectable()
export class AuthService {
  constructor(private prismaService: PrismaService) {}

  async getAllUsers(): Promise<User[]> {
    return this.prismaService.user.findMany();
  }

  async CreateUser(createUserDto: CreateUserDto): Promise<User> {
    return this.prismaService.user.create({ data: createUserDto });
  }
}
