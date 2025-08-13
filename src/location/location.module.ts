import { Module } from '@nestjs/common';
import { LocationService } from './location.service';
import { LocationResolver } from './location.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [LocationResolver, LocationService],
  imports: [PrismaModule],
})
export class LocationModule {}
