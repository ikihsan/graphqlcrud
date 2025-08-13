import { Module } from '@nestjs/common';
import { StateService } from './state.service';
import { StateResolver } from './state.resolver';
import { Prisma } from 'generated/prisma';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [StateResolver, StateService],
  imports: [PrismaModule],
})
export class StateModule {}
