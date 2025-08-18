// import { Module } from '@nestjs/common';
// import { JwtModule } from '@nestjs/jwt';
// import { PassportModule } from '@nestjs/passport';
// import { AuthService } from './auth.service';
// import { JwtStrategy } from './jwt.strategy';
// import { ConfigService } from '@nestjs/config';

// @Module({
//   imports: [
//     PassportModule,
//     JwtModule.registerAsync({
//       useFactory: (configService: ConfigService) => {
//         return {
//           secret: configService.get('JWT_SECRET'),
//           signOptions: { expiresIn: '1d' }, // Token expiry: 1 day
//         };
//       },
//       inject: [ConfigService],
//     }),
//   ],
//   providers: [AuthService, JwtStrategy],
//   exports: [AuthService],
// })
// export class AuthModule {}