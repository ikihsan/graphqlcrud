import { Args, Resolver } from '@nestjs/graphql';
import { StateService } from './state.service';
import { CreateStateInput } from './dto/create-state';
import { StateModel } from './model/state-model';
import { Mutation } from '@nestjs/graphql';
import { Query } from '@nestjs/graphql';

@Resolver(() => StateModel)
export class StateResolver {
  constructor(private readonly stateService: StateService) {}

  @Mutation(()=>StateModel)  
    async CreateState(@Args('data') dataa: CreateStateInput) {
      return await this.stateService.create(dataa);
      
    
  }
  @Query(() => [StateModel])
  async liststate () {
    return await this.stateService.liststate();
  }
  }

