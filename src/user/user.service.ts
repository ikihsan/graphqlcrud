import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt'
import { Role } from 'src/enumreg';
import { Usermodel } from 'src/user/model/usermodel';
import { AdminInput } from 'src/user/dto/admincreate.dto';
import { AuthService } from 'src/auth/auth.service';


@Injectable()
export class UserService {
    constructor(private prisma: PrismaService,private authService : AuthService){}




    async checkmailorusername(login : any){
        const {userormail,password } = login;
        const user = await this.prisma.user.findFirst({

            where : {
                OR : [
                    {username : userormail},
                    {email : userormail}
                ]
            }
        });
        if(!user) throw new Error('User not found');
        user.password = password;
        return user;
    }
    async login(login : any){

        const user = await this.prisma.user.findFirst({
            where : {
                username : login.username,
            }
        });
        if (!user) throw new Error('User not found');
        const valid = await bcrypt.compare(login.password,user.password);
        if (!valid) throw new Error('Invalid password');
        const token = await this.authService.GenerateToken(user);
        return token;

    }

    async loginany(login : any){

        const user = await this.prisma.user.findFirst({
            where : {
                username : login.username,
            }
        });
     
        if (!user) throw new Error('User not found');
        const valid = await bcrypt.compare(login.password,user.password);
        if (!valid) throw new Error('Invalid password');
        const token = await this.authService.GenerateToken(user);
        return token;



    }

    async create(user : any){
        const valid = await this.checkUser(user.username);
 if (valid){
     const hashed = await bcrypt.hash(user.password,10);
        await this.prisma.user.create({
            data : {
                
                ...user,
                password : hashed,
            }
        })
        return `succesfully created user ${user.username}`
    }
else 
throw new Error('User already exists');

}

    async createadmin(user: any){
 const valid = await this.checkUser(user.username);
 if (valid){
    const hashed = await bcrypt.hash(user.password,10);
        console.log(hashed);
        await this.prisma.user.create({
            data : {...user,
                password : hashed,
                
            }
        })
        return `succesfully created admin ${user.username}`
    }
    else{
        throw new Error('User already exists');
    }}

    async validateuser (username : string, email : string){
        const user = await this.prisma.user.findFirst({
            where : {
                OR : [
                    {username : username},
                    {email : email}
                ]
            }
        });
        return user
    }
    

    async allUsers(role : Role){
        if ( role=== Role.admin)
            return await this.prisma.user.findMany();
        else 
            throw new Error('You are not admin');
    }

    async checkUser(username : string) {
        const validateuser = await this.prisma.user.findUnique({ where: { username } });
        if (validateuser === null) return `error`;
        return validateuser ;
    }
}
