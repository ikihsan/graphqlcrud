import { Args, Mutation, Resolver,Query } from '@nestjs/graphql';
import { EventService } from './event.service';
import { CreateEventInput } from './dto/create.event';
import { EventModel } from './model/event.model';
import { eventwhereInput } from './dto/where.event';
import { UseGuards } from '@nestjs/common';
import { RolesGuard } from '../auth/rolesguard';
import { SetMetadata } from '@nestjs/common';
import { Role } from 'src/enumreg';
import { GqlAuthGuard } from 'src/auth/gqlguard';
// import {EventwithVNo} from './model/eventwithvechileno';
// import { EventArgs } from './dto/fornew';
import { eventFilter } from '../common/numberfilter';
import { skip, take } from 'src/common/skiptake';
import { keyword } from 'src/vehicle/dto/create.vehicle';
import { OrderByInput } from './dto/orderbyinput';



@Resolver()
export class EventResolver {
  constructor(private readonly eventService: EventService) {}

  @Mutation(()=>EventModel)
  async CreateEvent(@Args('data') dataa: CreateEventInput, @Args('where') where: eventwhereInput) {
    return this.eventService.createEvent(dataa,where);
  }

// @UseGuards(GqlAuthGuard,RolesGuard)
// @SetMetadata('roles', [Role.admin])

  @Query(()=>[EventModel])
  async listevents(@Args('search',{nullable: true}) search?:string,
  @Args('where',{nullable: true}) where?: eventFilter,
   @Args('skip',{nullable: true}) skip?: number,
    @Args('take',{nullable: true}) take ?: number, @Args('orderBy', {nullable: true}) orderBy ?:OrderByInput ) {
   const events =await this.eventService.listevents(search,where,skip,take,orderBy);
   return events;
  }


  
}
