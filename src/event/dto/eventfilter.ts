import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class nameFilter {
   
    @Field({nullable:true})
    equals?: string;
   
    @Field({nullable:true})
    in?: string;
}
@InputType()
export class EventFilter {
    @Field(()=>nameFilter,{nullable:true})
    eventCategory?: nameFilter;

}