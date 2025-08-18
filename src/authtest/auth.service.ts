// import { Injectable } from '@nestjs/common';
// import { JwtService } from '@nestjs/jwt';
// import { UserInput } from 'src/user/dto/usercreateinput';
// import {  AuthModel } from './dto/authinput';
// import { ConfigService } from '@nestjs/config';
// import { Context } from '@nestjs/graphql';



// @Injectable()
// export class AuthService {
// constructor (private jwt : JwtService, private Config: ConfigService){}

//     async GenerateToken(user : AuthModel ){
//         console.log("from generate token ",user);
//         console.log('JWT_SECRET:', this.Config.get('JWT_SECRET'));
//         const payload = { username : user.username , email : user.email};
//         const token = await this.jwt.signAsync(payload,{secret : this.Config.get('JWT_SECRET')});
//         console.log("tpoken =",token);
//     return {
//         accessToken :token,  username: user.username,
//   email: user.email,
//     }


//     }
    






// }