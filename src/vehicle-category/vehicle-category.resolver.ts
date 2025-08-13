import { Resolver } from '@nestjs/graphql';
import { Args, Mutation, Query } from '@nestjs/graphql';
import { VehicleCategoryService } from './vehicle-category.service';
import { CreateVehicleCategoryInput } from './dto/create-vcategory';
import { VehicleCategoryModel } from './model/vcategory-model';

@Resolver()
export class VehicleCategoryResolver {
  constructor(private readonly vehicleCategoryService: VehicleCategoryService) {}

  @Mutation(()=> VehicleCategoryModel)
  CreateVehicleCategory(@Args('data') dataa: CreateVehicleCategoryInput) {
    if (dataa.name.length < 2) throw new Error('Name must be at least 2 characters');
    return this.vehicleCategoryService.createVehicleCategory(dataa);
  }

  @Query(()=> [VehicleCategoryModel])
  listVehicleCategory() {
    return this.vehicleCategoryService.listVehicleCategory();
  }
}
