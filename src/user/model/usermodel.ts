import { ObjectType,Field } from "@nestjs/graphql";
import { Role } from "src/enumreg";

@ObjectType()
export class Usermodel {

    @Field()
    userid?:string;

    @Field()
    username: string;

    @Field()
    email: string;
    @Field(()=>Role)
    role: Role;

}