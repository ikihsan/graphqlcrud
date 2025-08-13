import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateStateInput } from './dto/create-state';


@Injectable()
export class StateService {
constructor(private Prisma: PrismaService) {}

 async create(dataaa: CreateStateInput) {
    return await this.Prisma.state.create({
      data: {
        name : dataaa.name
      }
    })
    
  }
  async liststate() {
    return await this.Prisma.state.findMany({
      where: {
        isDeleted: false,
      },
    });
  }
}
