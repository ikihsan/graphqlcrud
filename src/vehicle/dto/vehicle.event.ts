import { InputType, Field, registerEnumType } from "@nestjs/graphql";

@InputType()
export class connEvent {
    @Field()
    eventId: string;
}
export enum orderBy {
    asc = "asc",
    desc = "desc",
}
registerEnumType(orderBy, { name: "orderBy" });