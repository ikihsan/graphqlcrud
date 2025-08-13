import { InputType, Field,ID } from "@nestjs/graphql";
import { EventCategory,EventStatusType,EventCurrentStatus,EventBidLockType } from "../../enumreg";
import { SellerModel } from "src/seller/model/seller-model";
import { VehicleCategoryModel } from "src/vehicle-category/model/vcategory-model";
import { LocationModel } from "src/location/model/location-model";


@InputType()
export class eventwhereInput{
    

@Field({nullable:true})
    sellerId: string


    @Field({nullable:true})
    vehicleCategoryId?: string

    
    @Field({nullable:true})
    locationId?: string



}


