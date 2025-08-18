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


@Resolver()
export class EventResolver {
  constructor(private readonly eventService: EventService) {}

  @Mutation(()=>EventModel)
  async CreateEvent(@Args('data') dataa: CreateEventInput, @Args('where') where: eventwhereInput) {
    return this.eventService.createEvent(dataa,where);
  }

@UseGuards(GqlAuthGuard,RolesGuard)
@SetMetadata('roles', [Role.admin])
  @Query(()=>[EventModel])
  async listevents() {
    return this.eventService.listevents();
  }
}
