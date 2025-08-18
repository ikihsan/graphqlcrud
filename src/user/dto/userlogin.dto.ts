import { InputType, Field } from "@nestjs/graphql";
import { MinLength ,IsEmail} from "class-validator";
import { Transform } from "class-transformer";


@InputType()
export class LoginInput {

    @Field()
    @MinLength(3,{message :"Username must be at least 3 characters long"})
    @Transform(({value}) => value.toLowerCase().trim())
    userormail: string;

    @Field()
    @MinLength(4,{message :"Password must be at least 4 characters long"})
    password: string;


}