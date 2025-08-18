// import { Injectable } from '@nestjs/common';
// import { PassportStrategy } from '@nestjs/passport';
// import { ExtractJwt } from 'passport-jwt';
// import { Strategy } from 'passport-jwt'
// import { ConfigService } from '@nestjs/config';
// import { AuthModel } from './dto/authinput';

// @Injectable()
// export class JwtStrategy extends PassportStrategy(Strategy,'jwt') {
//   constructor(private configService: ConfigService) {
//     super({
//       jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // Get token from header
//       secretOrKey: configService.get('JWT_SECRET'),    // Use configService
//     });
//   }

//   async validate(payload: AuthModel) {

//     return { username: payload.username, email: payload.email };
//   }
// }