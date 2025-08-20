import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class inputVehicle{

    @Field({nullable:true})
    registrationNumber: string;

    @Field({nullable:true})
    bidStartTime: Date;

    @Field({nullable:true})
    bidTimeExpire: Date;

    @Field({nullable:true})
    loanAgreementNo: string;

}
 
@InputType()
export class keyword{
    @Field({nullable:true})
    keyword?: string;

}