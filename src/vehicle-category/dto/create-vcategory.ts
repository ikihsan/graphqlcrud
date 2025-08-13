import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class CreateVehicleCategoryInput {
    @Field(() => String)
    name: string;
}