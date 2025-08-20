import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { PrismaModule } from './prisma/prisma.module';
import { StateModule } from './state/state.module';
import { LocationModule } from './location/location.module';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { ApolloServerPlugin } from '@apollo/server';
import { SellerModule } from './seller/seller.module';
import { VehicleCategoryModule } from './vehicle-category/vehicle-category.module';
import { EventModule } from './event/event.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { VehicleModule } from './vehicle/vehicle.module';

  

@Module({
   imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      introspection: true,
      context: ({ req }) => ({ req }),
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault() as unknown as ApolloServerPlugin],
    }),
    PrismaModule,
    StateModule,
    LocationModule,
    SellerModule,
    VehicleCategoryModule,
    EventModule,
    VehicleModule,
    UserModule,
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true, // makes ConfigService available everywhere
    }),
    
  ],})
export class AppModule {}