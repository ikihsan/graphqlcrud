import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class CreateVehicleInput {
    @Field()
    registrationNumber: string;
    @Field()
    loanAgreementNo: string;
    @Field()
    registeredOwnerName: string;
    @Field()
    eventId: string;
    @Field()
    bidTimeExpire: Date;
    @Field()
    bidStartTime: Date;
}