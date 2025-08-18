import { Mutation, Resolver, Query } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserInput } from './dto/usercreate.dto';
import { Args } from '@nestjs/graphql';
import { AdminInput } from './dto/admincreate.dto';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/gqlguard';
import * as bcrypt from 'bcrypt';
import { Usermodel } from './model/usermodel';
import { Role } from 'src/enumreg';
import { AuthGuard } from '@nestjs/passport';
import { LoginInput } from './dto/userlogin.dto';


@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

@Mutation(()=>String)
async createUser(@Args('data') user :UserInput){
    return await this.userService.create(user);
}
@UseGuards(GqlAuthGuard)
@Mutation(()=>String)
async createadmin(@Args('data') user :AdminInput){
  return await this.userService.createadmin(user);

}

@Mutation(()=>String)
async login (@Args('data') login :UserInput){
  const validate = await this.userService.validateuser(login.username, login.email);
  if (!validate) throw new Error('User not found');
  const token = await this.userService.login(login);
  return `token : ${token}`;
  }



  @Mutation (()=>String)
  async loginany (@Args('data') login :LoginInput){
    
    const validate = await this.userService.checkmailorusername(login);
    if (!validate) throw new Error('User not found');
    const token = await this.userService.loginany(validate);
    return "token : "+token;
  }

}
