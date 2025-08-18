import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';
import { GqlAuthGuard } from '../auth/gqlguard';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports : [PrismaModule,JwtModule,AuthModule],
  providers: [UserResolver, UserService,GqlAuthGuard],
  exports: [UserService],
})
export class UserModule {}
