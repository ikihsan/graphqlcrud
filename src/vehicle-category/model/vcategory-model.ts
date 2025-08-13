import { ObjectType, Field } from "@nestjs/graphql";

@ObjectType() 
export class VehicleCategoryModel  {

    @Field(() => String)
    id: string;

    @Field(() => String)
    name: string;

    @Field(() => Date)
    createdAt: Date;

    @Field(() => Date)
    updatedAt: Date;

    @Field(() => Boolean)
    isDeleted: boolean;
}