import { InputType, Field } from '@nestjs/graphql';
import { StateNames } from '../../enumreg';
import { $Enums } from 'generated/prisma';

@InputType()
export class CreateStateInput {
  @Field(() => StateNames)
  name:  StateNames;
}

