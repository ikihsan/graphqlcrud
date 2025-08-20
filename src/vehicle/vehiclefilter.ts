import { InputType, Field } from "@nestjs/graphql";
import { dateFilter, numberFilter } from "src/common/numberfilter";
import { StringFilter } from "src/common/stringfilter";

@InputType()
export class VehicleFilter {
    @Field({nullable:true})
    registrationNumber?: StringFilter;
    @Field({nullable:true})
    bidStartTime?: dateFilter;
    @Field({nullable:true})
    bidTimeExpire?: dateFilter;
    @Field({nullable:true})
    loanAgreementNo?: StringFilter;
    @Field({nullable:true})
    vehicleIndexNo?: numberFilter;

}