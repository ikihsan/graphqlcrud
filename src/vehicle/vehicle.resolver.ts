import { Resolver } from '@nestjs/graphql';
import { VehicleService } from './vehicle.service';
import { CreateVehicleInput } from './dto/create-vehicle';
import { Args } from '@nestjs/graphql';
import {VehicleModel } from './model/vehicle-model';
import { Mutation ,Query} from '@nestjs/graphql';

@Resolver()
export class VehicleResolver {
  constructor(private readonly vehicleService: VehicleService) {}

  @Mutation(()=>VehicleModel)
  async createVehicle ( @Args('data') dataa: CreateVehicleInput) {
    return this.vehicleService.createVehicle(dataa);
  }
  @Query (()=>[VehicleModel])
  async Searchvehicle (@Args('keyword') dataa:string ){
    return this.vehicleService.Searchvehicle(dataa);
  }

}
