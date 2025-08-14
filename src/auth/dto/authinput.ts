import { InputType, Field, ObjectType } from '@nestjs/graphql';

@InputType()
export class AuthModel{
    @Field()
    username: string;

    @Field()
    email: string;
}