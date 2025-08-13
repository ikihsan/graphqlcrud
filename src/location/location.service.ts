import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import {CreateLocationInput} from './dto/create-location';
import { locationwhereInput } from './dto/where.input';
import { locationUpdateInput } from './dto/updatelocation';
@Injectable()
export class LocationService {
constructor(private Prisma: PrismaService) {}

async listlocation () {
    return await this.Prisma.location.findMany({
        where: {
            isDeleted: false,
        },
        include: {
           state: true
          },
    });
}
async createlocation(dataaa: CreateLocationInput,where:locationwhereInput) {
    const temp = await this.Prisma.state.findUnique({where:{id:where?.stateId}});
    if (!where.stateId){
        throw new Error('State not found');
    }
    else{
    return await this.Prisma.location.create({
      data: {
        name : dataaa.name,
        stateId : where.stateId,
        id : where?.id
      }
    })
    }
   }

   async updateLocData(dataa: locationUpdateInput,wheree:locationwhereInput) {
    if(!wheree.id){
      throw new Error('Location not found');
    }
    else{
    return await this.Prisma.location.update({
    where: {
      id: wheree.id, 
      stateId: wheree?.stateId
    },
    data: {
      name: dataa.name,
      isDeleted: dataa.isDeleted,
    }
      },    
    );
  }}
  async listOne(unique) {
    if(!unique.id )
        throw new Error('give proper id');
    else
    {
    return await this.Prisma.location.findUnique(
        {
            where : {
                id : unique.id
            }
        }
    )
  }
}
  async deleteLocation(wheree){
    if(!wheree.id )
        throw new Error('Location not found');
    else
    {
        return await this.Prisma.location.delete({
            where : {
                id : wheree.id
            }
            
        })
    }
  }
}
