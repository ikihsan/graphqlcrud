import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateVehicleCategoryInput } from './dto/create-vcategory';

@Injectable()
export class VehicleCategoryService {
    constructor(private Prisma: PrismaService) {}
async createVehicleCategory(daata : CreateVehicleCategoryInput )
{
return this.Prisma.vehicleCategory.create({
    data:{
    ...daata
}
});
}

async listVehicleCategory(){
    return this.Prisma.vehicleCategory.findMany();
}

}