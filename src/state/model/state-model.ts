import { ObjectType, Field, ID } from '@nestjs/graphql';
import { LocationModel } from 'src/location/model/location-model';
import { StateNames } from '../../enumreg';

@ObjectType()
export class StateModel {
  @Field(() => ID)
  id: string;

  @Field(() => StateNames)
  name:  StateNames;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field()
  isDeleted: boolean;
}