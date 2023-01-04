import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { User } from '@prisma/client';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private prisemaService: PrismaService) {
    super({
      secretOrKey: 'VTcompany',
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }
  async validate(payload) {
    const { username } = payload;
    console.log(username);
    const user: User = await this.prisemaService.user.findUnique({
      where: {
        id: '258f4f74-12d2-4312-9b00-bc932c98a6a8',
        username,
      },
    });
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
