// import { Mutation, Query, Resolver } from '@nestjs/graphql';
// import { UserService } from './user.service';
// import {Usermodel } from './model/user-model';
// import { UserInput} from './dto/usercreateinput';
// import { Args } from '@nestjs/graphql';
// import { UserloginInput } from './dto/userlogin.input';
// import { UseGuards } from '@nestjs/common';
// import { GqlAuthGuard } from 'src/auth/gql.guard';
// import { AuthResponse } from './model/user-model';
// @Resolver()
// export class UserResolver {
//   constructor(private readonly userService: UserService) {}

//   @Mutation(() => Usermodel)
//   async createUser(@Args('data') User: UserInput)
//   {
//     const email = User.email;
//     if(! await this.userService.checkmail(email)){
//       return this.userService.create(User);
//     }

//   }

//   @Mutation(()=> AuthResponse)
  

//   async login(@Args('data') login : UserloginInput) {
//       if( await this.userService.checkmail(login.userormail) || await this.userService.checkusername(login.userormail)){
//         const token = await this.userService.loginn(login);
//         return token;
//       }
//       }
        
// @UseGuards(GqlAuthGuard)
//   @Query(() => Usermodel)
  
//   async me(@Args('email') email: string) {
//       return this.userService.findUser(email);  
      
//     }

    
//   }

  

