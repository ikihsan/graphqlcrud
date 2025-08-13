import { ObjectType, Field, ID } from "@nestjs/graphql";

@ObjectType()
export class SellerModel {
    @Field(() => ID)
    id: string;

    @Field()
    name: string;   

    @Field()
    contactPerson: string; 
      @Field()
    GSTNumber: string;
      @Field()
    billingContactPerson: string;

    @Field()
    mobile: string;

    @Field()    
    createdAt: Date;

    @Field()
    updatedAt: Date;  
    @Field()
    isDeleted:boolean;
}