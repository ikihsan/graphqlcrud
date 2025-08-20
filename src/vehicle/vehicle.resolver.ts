import { Mutation, Query, Resolver } from '@nestjs/graphql';
import { VehicleService } from './vehicle.service';
import {inputVehicle, keyword} from './dto/create.vehicle';
import { Args } from '@nestjs/graphql';
import {connEvent} from './dto/vehicle.event';
import { VehModel } from './model/vehicle.model';
import {orderBy } from './dto/vehicle.event';
import { VehicleFilter } from './vehiclefilter';
@Resolver()
export class VehicleResolver {
  constructor(private readonly vehicleService: VehicleService) {}

  @Mutation(()=>VehModel)
  async createVehicle(@Args ('data') data: inputVehicle, @Args('where') where: connEvent) {
    const vehicle = await this.vehicleService.create(data,where);
    if (!vehicle) {
      throw new Error('Vehicle creation failed');
    }
    return vehicle;
  }

  @Query(()=>[VehModel])
 async listvehicle(@Args('search')search :keyword,
 @Args('orderBy' ,{type: () => orderBy , defaultValue: orderBy.asc})
 orderBy ?: orderBy,
@Args('where')where ?: VehicleFilter){
  const vehicle = await this.vehicleService.listvehicle(search,orderBy,where);
  if (!vehicle) {
    throw new Error('Vehicle listing failed');
  }
  return vehicle;
 }
}
