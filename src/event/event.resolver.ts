import { Args, Mutation, Resolver,Query } from '@nestjs/graphql';
import { EventService } from './event.service';
import { CreateEventInput } from './dto/create.event';
import { EventModel } from './model/event.model';
import { eventwhereInput } from './dto/where.event';

@Resolver()
export class EventResolver {
  constructor(private readonly eventService: EventService) {}

  @Mutation(()=>EventModel)
  async CreateEvent(@Args('data') dataa: CreateEventInput, @Args('where') where: eventwhereInput) {
    return this.eventService.createEvent(dataa,where);
  }

  @Query(()=>[EventModel])
  async listevents() {
    return this.eventService.listevents();
  }
}
