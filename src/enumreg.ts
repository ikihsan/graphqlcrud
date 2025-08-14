import { registerEnumType } from "@nestjs/graphql";


export enum StateNames {
  Maharashtra = 'Maharashtra',
  Bihar = 'Bihar',
  Chhattisgarh = 'Chhattisgarh',
  Karnataka = 'Karnataka',
  Manipur = 'Manipur',
  Arunachal_Pradesh = 'Arunachal_Pradesh',
  Assam = 'Assam',
  Gujarat = 'Gujarat',
  Punjab = 'Punjab',
  Mizoram = 'Mizoram',
  Andhra_Pradesh = 'Andhra_Pradesh',
  West_Bengal = 'West_Bengal',
  Goa = 'Goa',
  Haryana = 'Haryana',
  Himachal_Pradesh = 'Himachal_Pradesh',
  Kerala = 'Kerala',
  Rajasthan = 'Rajasthan',
  Jharkhand = 'Jharkhand',
  Madhya_Pradesh = 'Madhya_Pradesh',
  Odisha = 'Odisha',
  Nagaland = 'Nagaland',
  TamilNadu = 'TamilNadu',
  Uttar_Pradesh = 'Uttar_Pradesh',
  Telangana = 'Telangana',
  Meghalaya = 'Meghalaya',
  Sikkim = 'Sikkim',
  Tripura = 'Tripura',
  Uttarakhand = 'Uttarakhand',
  Jammu_and_Kashmir = 'Jammu_and_Kashmir',
  Delhi = 'Delhi',
  Lakshadweep = 'Lakshadweep',
  Puducherry = 'Puducherry',
  Ladakh = 'Ladakh',
  Chandigarh = 'Chandigarh',
  Andaman_and_Nicobar_Islands = 'Andaman_and_Nicobar_Islands',
  Dadra_and_Nagar_Haveli_and_Daman_and_Diu = 'Dadra_and_Nagar_Haveli_and_Daman_and_Diu',
  PAN_INDIA = 'PAN_INDIA',
}
export enum EventCategory {
  TwoWheeler = 'TwoWheeler',
  threeWheeler = 'threeWheeler',
  fourWheeler = 'fourWheeler',
}
export enum EventStatusType {
  active = 'active',
  inactive = 'inactive',
}
export enum EventCurrentStatus {
  pending = 'pending',
  ongoing = 'ongoing',
  completed = 'completed',
}
export enum EventBidLockType {
  unlocked = 'unlocked',
  locked = 'locked',
}
export enum Role{
  user='user',
  admin='admin',
  visitor='visitor',
}
registerEnumType(EventCategory, { name: "EventCategory" });
registerEnumType(EventStatusType, { name: "EventStatusType" });
registerEnumType(EventCurrentStatus, { name: "EventCurrentStatus" });
registerEnumType(EventBidLockType, { name: "EventBidLockType" });
registerEnumType(StateNames, { name: "StateNames" });
registerEnumType(Role,{name:"Role"});

