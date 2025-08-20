import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class numberFilter{

    @Field({nullable: true})
    gt?: number;
    @Field({nullable: true})
    gte?: number;
    @Field({nullable: true})
    lt?: number;
    @Field({nullable: true})
    lte?: number;
    @Field({nullable: true})
    equals?: number;
}
@InputType()
export class dateFilter {
  @Field({nullable: true}) gt?: Date;
  @Field({nullable: true}) gte?: Date;
  @Field({nullable: true}) lt?: Date;
  @Field({nullable: true}) lte?: Date;
  @Field({nullable: true}) equals?: Date;
}


@InputType()
export class eventFilter{
    @Field({nullable: true})
    startDate?: dateFilter;
    @Field({nullable: true})
    endDate?: dateFilter;
    @Field({nullable: true})
    eventNo?: numberFilter;
    
}