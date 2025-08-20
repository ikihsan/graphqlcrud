import { InputType, Field  } from "@nestjs/graphql";

@InputType()
export class skip {
    @Field({nullable:true})
    skip?: number;
}

@InputType()
export class take {
    @Field({nullable:true})
    take?: number;
}