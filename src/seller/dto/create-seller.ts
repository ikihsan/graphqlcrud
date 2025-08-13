import { InputType, Field , Int,ID } from "@nestjs/graphql";

@InputType()
export class CreateSellerInput {
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
}
