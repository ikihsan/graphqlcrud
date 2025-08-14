import { ObjectType,Field } from "@nestjs/graphql";

@ObjectType()
export class Usermodel {

    @Field()
    userid?:string;

    @Field()
    username:string;

    @Field()
    email:string;

    @Field()
    password:string;

}