import { Resolver } from '@nestjs/graphql';
import { LocationService } from './location.service';
import { CreateLocationInput } from './dto/create-location';
import { Args } from '@nestjs/graphql';
import { LocationModel } from './model/location-model';
import { Query,Mutation } from '@nestjs/graphql';
import { locationwhereInput } from './dto/where.input';
import {locationUpdateInput} from './dto/updatelocation';
@Resolver()
export class LocationResolver {
  constructor(private readonly locationService: LocationService) {}


@Query(()=>[LocationModel])
  async listlocation() {
    return await this.locationService.listlocation();
  }

@Mutation(()=>LocationModel)
async createlocation(@Args('data') dataa: CreateLocationInput,@Args('where') where: locationwhereInput) {
    return await this.locationService.createlocation(dataa,where);
  }


  @Mutation(()=> LocationModel)
  async updatelocation(@Args('data') dataa : locationUpdateInput,@Args('where') where: locationwhereInput) {
    return await this.locationService.updateLocData(dataa,where);
  } 
  @Query(()=>LocationModel)
  async listUnique(@Args('where') where: locationwhereInput) {
    return await this.locationService.listOne(where);
  }

  @Mutation(()=> LocationModel)
  async deleteLocation(@Args('where') where: locationwhereInput) {
    return await this.locationService.deleteLocation(where);
  }
}
