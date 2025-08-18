import { InputType,Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class AuthModel{
    @Field()
    accessToken?: string;
    @Field()
    message?: string;
}