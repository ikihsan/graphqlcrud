import { InputType, Field, ID } from '@nestjs/graphql';
import { IsNotEmpty, IsString, IsBoolean, IsOptional } from 'class-validator';

@InputType()
export class locationwhereInput {

    
    @Field({nullable:true})
    stateId?: string;

    @Field({nullable:true})
    id?: string;


}