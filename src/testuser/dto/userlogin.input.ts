import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class UserloginInput {
    @Field()
    userormail: string;
    @Field()
    password: string;
}







