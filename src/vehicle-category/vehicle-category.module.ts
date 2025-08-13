import { Module } from '@nestjs/common';
import { VehicleCategoryService } from './vehicle-category.service';
import { VehicleCategoryResolver } from './vehicle-category.resolver';

@Module({
  providers: [VehicleCategoryResolver, VehicleCategoryService],
})
export class VehicleCategoryModule {}
