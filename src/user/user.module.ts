import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UserResolver } from './user.resolver';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { AuthModule } from 'src/auth/auth.module';
import { AuthService } from 'src/auth/auth.service';

@Module({
  imports: [PrismaModule, JwtModule, AuthModule],
  providers: [UserResolver, UserService, JwtService, AuthService],
})
export class UserModule {}
