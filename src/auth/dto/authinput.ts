import { InputType,Field, ObjectType } from "@nestjs/graphql";

@InputType() 
export class AuthInput{
    @Field()
    username: string;

    @Field()
    email: string;
    @Field()
    password: string;
}