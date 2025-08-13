import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateVehicleInput } from './dto/create-vehicle';
import { contains } from 'class-validator';
@Injectable()
export class VehicleService {
    constructor(private Prisma : PrismaService) {}

    async createVehicle(dataa: CreateVehicleInput) {
      return this.Prisma.vehicle.create({

        data : {
            ...dataa
        }
      })
    }
async Searchvehicle(dataa : string) {
    return this.Prisma.vehicle.findMany({
        where : {
            OR :[
               { registrationNumber : {contains : dataa,mode : 'insensitive'}},
               { loanAgreementNo : {contains : dataa,mode : 'insensitive'}},
               { registeredOwnerName : {contains : dataa,mode : 'insensitive'}},
            ],
        },
      
    });
}
}
