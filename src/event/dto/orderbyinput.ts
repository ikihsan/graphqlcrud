import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class OrderByInput {
    @Field({nullable:true , defaultValue:'desc'})
    eventNo?: 'asc' | 'desc';
    @Field({nullable:true , defaultValue:'desc'})
    startDate?:'asc' | 'desc';
    @Field({nullable:true , defaultValue:'desc'})
    endDate?: 'asc' | 'desc';
}