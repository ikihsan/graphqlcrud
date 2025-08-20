import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { inputVehicle } from './dto/create.vehicle';
import { connEvent, orderBy } from './dto/vehicle.event';
import { VehicleFilter } from './vehiclefilter';
import { keyword } from './dto/create.vehicle';
@Injectable()
export class VehicleService {
    constructor(private prisma: PrismaService) {}
    async create(data: inputVehicle, where : connEvent) {
        const vehicle = await this.prisma.vehicle.create({
            data: {
                ...data,
            event : {connect :{id : where.eventId}}},
            include : {event : true},
        });
        if(vehicle === null) throw new Error('Vehicle creation failed');
        if(where.eventId){
        const vehiclesCount =await this.prisma.event.update({
            where : {id : where.eventId},
            data : {vehiclesCount : {increment : 1}}
        });
        
        if(vehiclesCount === null) throw new Error('Vehiclecount increment failed');
        }

        return vehicle;
    }

    async listvehicle(search : keyword, orderBy ?: orderBy ,where ?: VehicleFilter) {
        if(search.keyword){
            const vehicle = await this.prisma.vehicle.findMany({
                where : {
                    OR : [
                     { registrationNumber: { contains: search.keyword, mode: 'insensitive' } },
        { loanAgreementNo: { contains: search.keyword, mode: 'insensitive' } },
                    ]
            },
            orderBy: {
      vehicleIndexNo: orderBy,
    },
            include : {event : true},

  });
        if(vehicle === null) throw new Error('Vehicle listing failed');
        
        
        return vehicle;
    }
        
        const vehiclee = await this.prisma.vehicle.findMany({
            where : {
                registrationNumber : where?.registrationNumber,
                bidStartTime : where?.bidStartTime,
                bidTimeExpire : where?.bidTimeExpire,
                loanAgreementNo : where?.loanAgreementNo,
                vehicleIndexNo : where?.vehicleIndexNo,
            },
            orderBy: {
      vehicleIndexNo: orderBy,
    },
            include : {event : true},
  });
        return vehiclee;
}
}