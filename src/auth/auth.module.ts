import { AuthController } from './auth.controller';
import { Module } from '@nestjs/common';

import { JwtModule } from '@nestjs/jwt';

import { UsersModule } from 'src/users/users.module';

import { AuthService } from './shared/auth.service';
import { LocalStrategy } from './shared/local.strategy';
import { JwtStrategy } from './shared/jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { jwtConstants } from './shared/constants';

@Module({
    imports: [
        UsersModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
    ],
    controllers: [
        AuthController,],
    providers: [
        AuthService,
        LocalStrategy,
        JwtStrategy
    ],
})
export class AuthModule { }
