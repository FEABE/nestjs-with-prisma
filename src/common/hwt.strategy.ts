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
    const { id, username, password } = payload;
    console.log(payload);
    const user: User = await this.prisemaService.user.findUnique({
      where: { id: id },
    });
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
