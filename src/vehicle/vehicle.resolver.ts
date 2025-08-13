import { Resolver } from '@nestjs/graphql';
import { VehicleService } from './vehicle.service';

@Resolver()
export class VehicleResolver {
  constructor(private readonly vehicleService: VehicleService) {}
}
