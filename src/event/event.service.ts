import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateEventInput } from './dto/create.event';
import {eventwhereInput} from './dto/where.event'
// import { EventArgs } from './dto/fornew';
import { EventFilter } from './dto/eventfilter';
import { Prisma } from '@prisma/client';
import { contains } from 'class-validator';
import { eventFilter } from 'src/common/numberfilter';
import { skip, take } from 'src/common/skiptake';
import { keyword } from 'src/vehicle/dto/create.vehicle';
import { EventCategory } from 'src/enumreg'; 
import { OrderByInput } from './dto/orderbyinput';

@Injectable()
export class EventService {
  constructor(private prisma: PrismaService) {}

  async createEvent(dataa: CreateEventInput,wheree :eventwhereInput ) {
    return this.prisma.event.create({
      data: {
        eventCategory: dataa.eventCategory,
        startDate: dataa.startDate,
        endDate: dataa.endDate,
        firstVehicleEndDate: dataa.firstVehicleEndDate,
        sellerId: wheree.sellerId,
        vehicleCategoryId: wheree.vehicleCategoryId,
        locationId: wheree.locationId,
        noOfBids: dataa.noOfBids,
        status: dataa.status,
        currentStatus: dataa.currentStatus,
        bidLock: dataa.bidLock,
      
      },
      include: {
        seller: true,
        vehicleCategory: true,
        location: true,
      },
    });
  }

  async listevents( search ?:string ,where ?:eventFilter,skip ?: number,take ?: number, orderBy ?:OrderByInput){
    
      if(!isNaN(Number(search))){
     const eventt = await this.prisma.event.findMany({
      where : {
               eventNo : {equals : Number(search!)}
                
      },include: {
                seller: true,
                vehicleCategory: true,
                location: true,
                vehicles: true,
                _count :{
                  select : {
                    vehicles : true
                  }
                }
              },
              
              orderBy: [
                {eventNo: orderBy?.eventNo},
               { startDate: orderBy?.startDate},
               { endDate: orderBy?.endDate},
              ],
              skip : skip,
              take : take,

            });
      return eventt;
    }
else if(search){
     const matchingCategories = Object.values(EventCategory).filter(category =>
  category.toLowerCase().includes(search!.toLowerCase()));
            const eventt = await this.prisma.event.findMany({
                where : {
                   
                    OR : [ {  id:{contains: search!, mode: 'insensitive' } },
                        { eventCategory: {
          in: matchingCategories.length ? matchingCategories : undefined,
        }}
  
            
                      ],
                },
            include: {
                seller: true,
                vehicleCategory: true,
                location: true,
                vehicles: true,
                _count :{
                  select : {
                    vehicles : true
                  }
                }
              },
              
              orderBy: [
                {eventNo: orderBy?.eventNo},
               { startDate: orderBy?.startDate},
               { endDate: orderBy?.endDate},
              ],
              skip : skip,
              take : take,

            });
             return eventt;
          }
        
          
        
    const events = await this.prisma.event.findMany({
      where : {
        startDate: {
          gte: where?.startDate?.gte,
          lte: where?.startDate?.lte,
          gt: where?.startDate?.gt,
          lt: where?.startDate?.lt,
        },
        endDate: {
          gte: where?.endDate?.gte,
          lte: where?.endDate?.lte,
          gt: where?.endDate?.gt,
          lt: where?.endDate?.lt,
        },
        eventNo: {
          gte: where?.eventNo?.gte,
          lte: where?.eventNo?.lte,
          equals: where?.eventNo?.equals,
        },
      },
      include: {
                seller: true,
                vehicleCategory: true,
                location: true,
                _count :{
                  select : {
                    vehicles : true
                  }
                }
              },
      skip : skip,
      take : take,
    });
    return events;
  }
}