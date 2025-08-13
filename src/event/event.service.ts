import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateEventInput } from './dto/create.event';
import {eventwhereInput} from './dto/where.event'

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
        vehiclesCount: dataa.vehiclesCount,
      },
      include: {
        seller: true,
        vehicleCategory: true,
        location: true,
      },
    });
  }
  async listevents() {
    return this.prisma.event.findMany({
      include: {
        seller: true,
        vehicleCategory: true,
        location: true,
      },
    });
  }
}