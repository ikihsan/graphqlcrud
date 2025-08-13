import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString, IsBoolean, IsOptional } from 'class-validator';

@InputType()
export class CreateLocationInput {
  
  @Field()
  name: string;

//   @Field()
//   @IsString()
//   @IsNotEmpty()
//   stateId: string;


}