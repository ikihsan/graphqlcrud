import { InputType , Field} from "@nestjs/graphql";
import { IsOptional } from "class-validator";
import { QueryMode1 } from "src/enumreg";

@InputType()
export class StringFilter {
    @Field({nullable:true})
    @IsOptional()
    contains ?: string;

    @Field({nullable:true})
    equals ?: string;

    @Field({nullable:true})
    startsWith ?: string;

    @Field({nullable:true})
    endsWith ?: string;

    @Field(()=>[String],{nullable:true})
    in ?: string[];
}

