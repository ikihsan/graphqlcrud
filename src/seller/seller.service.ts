import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSellerInput } from './dto/create-seller';

@Injectable()
export class SellerService {
constructor(private Prisma: PrismaService) {}

async listAllSeller(){
    return this.Prisma.seller.findMany();
}

async createSell(selldata : CreateSellerInput) {
    return this.Prisma.seller.create({
      data : {
        ...selldata
    }
    })
  }

}