import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserService } from 'src/user/user.service';
import { gql } from 'apollo-server-express';
import { GqlAuthGuard } from './gqlguard';
import { JwtStrategy } from './jwt.strategy';
import { RolesGuard } from './rolesguard';

@Module({
  imports: [ConfigModule.forRoot({isGlobal:true}),
    PassportModule,JwtModule.registerAsync({
      inject:[ConfigService,],
      useFactory: (conf:ConfigService) =>{
        return {
          secret: conf.get('JWT_SECRET'),
          signOptions: {expiresIn: '1d'}
        }
      }})],

  providers: [AuthResolver, AuthService,ConfigService,UserService,JwtStrategy,RolesGuard,GqlAuthGuard],
  exports: [AuthService,RolesGuard,GqlAuthGuard],

})
export class AuthModule {}
