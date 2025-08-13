import { InputType, Field,ID } from "@nestjs/graphql";
import { EventCategory,EventStatusType,EventCurrentStatus,EventBidLockType } from "../../enumreg";
import { SellerModel } from "src/seller/model/seller-model";
import { VehicleCategoryModel } from "src/vehicle-category/model/vcategory-model";
import { LocationModel } from "src/location/model/location-model";

@InputType()
export class CreateEventInput {
    @Field(() => EventCategory)
    eventCategory: EventCategory;

    @Field(() => Date)
    startDate: Date;

    @Field(() => Date)
    endDate: Date;

    @Field({nullable:true})
    firstVehicleEndDate?: Date;


    @Field({nullable:true})
    noOfBids?: number;

    @Field(() => EventStatusType,{nullable:true})
    status: EventStatusType 

    @Field(() => EventCurrentStatus,{nullable:true})
    currentStatus?: EventCurrentStatus

    @Field(()=>EventBidLockType,{nullable:true})
    bidLock ?: EventBidLockType
    
}