import { Resolver } from '@nestjs/graphql';
import { SellerService } from './seller.service';
import { Query, Mutation } from '@nestjs/graphql';
import { SellerModel } from './model/seller-model';
import { CreateSellerInput } from './dto/create-seller';
import { Args } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/gqlguard';

@Resolver(()=> SellerModel)
export class SellerResolver {
  constructor(private readonly sellerService: SellerService) {}
@UseGuards(GqlAuthGuard)
  @Query(()=> [SellerModel])
  async listAllSeller() {
    return this.sellerService.listAllSeller();
  }
  @Mutation(()=> SellerModel)
  async CreateSeller(@Args('data') sellerData : CreateSellerInput) {
    if(!sellerData.name || !sellerData.contactPerson || !sellerData.GSTNumber || !sellerData.billingContactPerson || !sellerData.mobile) 
      throw new Error ('give proper data');
      
    else
    return this.sellerService.createSell(sellerData);
  }
}
