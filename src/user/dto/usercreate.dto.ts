import { InputType, Field  }  from "@nestjs/graphql";
import { IsEmail ,Matches, MinLength , } from "class-validator";
import { Transform } from "class-transformer";

@InputType()
export class UserInput {
@Field()
@MinLength(3,{message :"Username must be at least 3 characters long"})
username : string ;


@Field()
@Transform(({value}) => value.toLowerCase().trim())
@IsEmail({},{message :"Enter a valid Email Address"})
@Matches(/^[^@]+@autobse\.com$/i,{message :"Enter a valid autobse Email Address"})
email : string ;

@Field()
@MinLength(4,{message :"Password must be at least 4 characters long"})
password : string ;


}