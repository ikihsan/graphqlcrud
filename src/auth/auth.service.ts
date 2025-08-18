import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { ConfigService } from '@nestjs/config';
import { access } from 'fs';
import * as bcrypt from 'bcrypt';
import { AuthInput } from './dto/authinput';


@Injectable()
export class AuthService {
 constructor (private jwt : JwtService, private Config: ConfigService){}


    async GenerateToken(user : any){
    
        const payload = { username : user.username , email : user.email , role : user.role};
        const token = await this.jwt.signAsync(payload,{secret : this.Config.get('JWT_SECRET')});
        return token;
    
    
    
    }
    
  
    }
       
