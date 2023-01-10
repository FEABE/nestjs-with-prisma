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
    const { username, id } = payload;
    console.log(username);
    const user: User = await this.prisemaService.user.findUnique({
      where: {
        id,
      },
    });
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
