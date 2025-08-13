import { ObjectType, Field, ID } from '@nestjs/graphql';
import { StateModel } from 'src/state/model/state-model';

@ObjectType()
export class LocationModel {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field()
  isDeleted: boolean;

  @Field({nullable:true})
  stateId?: string;

  @Field(() => StateModel,{nullable:true}) 
  state?: StateModel;
}