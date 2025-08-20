import { ObjectType, Field,ID } from "@nestjs/graphql";
import { EventCategory,EventStatusType,EventCurrentStatus,EventBidLockType } from "../../enumreg";
import { SellerModel } from "src/seller/model/seller-model";
import { VehicleCategoryModel } from "src/vehicle-category/model/vcategory-model";
import { LocationModel } from "src/location/model/location-model";

@ObjectType()
export class EventCount {
  @Field()
  vehicles: number;
}
@ObjectType()
export class EventModel {
    @Field()
    id:string;
    @Field()
    eventNo: number;
    @Field(() => EventCategory)
    eventCategory: EventCategory;
    @Field()
    startDate: Date;
    @Field()
    endDate: Date;
    @Field({nullable:true})
    firstVehicleEndDate?: Date;

    @Field({nullable:true})
    sellerId?: string;

    @Field({nullable:true})
    seller?: SellerModel;

    @Field({nullable:true})
    vehicleCategoryId: string;

    @Field(()=>VehicleCategoryModel,{nullable:true})
    vehicleCategory?: VehicleCategoryModel;

    @Field({nullable:true})
    locationId: string;

    @Field({nullable:true})
    location?: LocationModel;

    @Field({nullable:true})
    noOfBids: number;

    @Field(()=>EventStatusType,{nullable:true})
    status: EventStatusType;

    @Field(()=>EventCurrentStatus,{nullable:true})
    currentStatus: EventCurrentStatus;

    @Field({nullable:true})
    downloadableFile_filename: string;

    @Field({nullable:true})
    termsAndConditions?: string;

    @Field({nullable:true})
    createdAt: Date;

    @Field({nullable:true})
    updatedAt: Date;

    @Field(()=>EventBidLockType,{nullable:true})
    bidLock: EventBidLockType;

    @Field({nullable:true})
    extraTimeTrigerIn: number;

    @Field({nullable:true})
    extraTime: number;

    @Field({nullable:true})
    vehicleLiveTimeIn: number;

    @Field({nullable:true})
    gapInBetweenVehicles: number;

    @Field({nullable:true})
    vehiclesCount: number;

    @Field()
    isDeleted: boolean;
    @Field(() => EventCount, { nullable: true })
  _count?: EventCount;


}