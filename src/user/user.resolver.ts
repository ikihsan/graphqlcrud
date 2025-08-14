import { Mutation, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import {Usermodel } from './model/user-model';
import { UserInput} from './dto/usercreateinput';
import { Args } from '@nestjs/graphql';
import { UserloginInput } from './dto/userlogin.input';
@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => Usermodel)
  async createUser(@Args('data') User: UserInput)
  {
    const email = User.email;
    if(! await this.userService.checkmail(email)){
      return this.userService.create(User);
    }

  }

  @Mutation(()=> Usermodel)
  async login(@Args('data') login : UserloginInput) {
      if( await this.userService.checkmail(login.userormail) || await this.userService.checkusername(login.userormail))
        return this.userService.login(login);
    
      }
        

    
    
  }

  

