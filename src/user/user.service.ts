import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { UserInput } from './dto/usercreateinput';
import { UserloginInput } from './dto/userlogin.input';
import * as bcrypt from 'bcrypt';
import { AuthService } from '../auth/auth.service';
import { isEmail } from 'validator';


@Injectable()
export class UserService {
constructor(private prisma: PrismaService,private jwt : JwtService, private auth : AuthService) {}

async create(user : UserInput){
    const hashed = await bcrypt.hash(user.password,10);
    return this.prisma.user.create({
        data :{
            username : user.username,
            email : user.email,
            password : hashed,
           
        }
    })
}
async checkmail(email : string): Promise<boolean> {
    try{
    if(isEmail(email)){
     const valid = await this.prisma.user.findUnique({ where: { email : email } });
     console.log (valid);
    return valid ? true : false;
    }
    else return false;
}
catch(error){
    throw new Error('mail id incorrect '+ email);
}
  }

async login (user : UserloginInput) {

    try{
        const existing = await this.prisma.user.findFirst({ where: {
           OR :[
                { username: user.userormail },
                { email: user.userormail }, 
           ]
           }
        });
        console.log(existing);
        if(existing === null) throw new Error('invalid credentials');
        const match = await bcrypt.compare(user.password,existing.password);
      const { email, username } = existing;
        if(match) return this.auth.GenerateToken({email,username});
    }
    catch(error){
        throw new Error('Plese Try again');
    }



}

async checkusername(username : string): Promise<boolean> {
    try{
    const valid = await this.prisma.user.findUnique({ where: { username } });
    return valid ? true : false;
}
catch(error){
    throw new Error('invalid username');
}
  }

}
