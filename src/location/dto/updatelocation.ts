import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString, IsBoolean, IsOptional } from 'class-validator';

@InputType()
export class locationUpdateInput {

  @Field()
  name: string;

  @Field()
  isDeleted: boolean;


}