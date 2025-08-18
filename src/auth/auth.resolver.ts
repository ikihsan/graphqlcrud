import { Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { Args } from '@nestjs/graphql';
import { AuthInput } from './dto/authinput';
import { AuthModel } from './dto/authout';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from './gqlguard';
import { UserService } from 'src/user/user.service';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService,private readonly user : UserService) {}




}
