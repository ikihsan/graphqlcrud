import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';

@Module({
   imports: [
    JwtModule.registerAsync({
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (config: ConfigService) => {
    const secret = config.get<string>('JWT_SECRET');
    console.log('Registering JWT with secret:', secret); // Optional debug
    return {
      secret,
      signOptions: { expiresIn: '1h' },
    };
  },
}),PassportModule,
   ],

  providers: [AuthResolver, AuthService],
})
export class AuthModule {}
