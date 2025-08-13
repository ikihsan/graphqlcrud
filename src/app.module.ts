import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { PrismaModule } from './prisma/prisma.module';
import { StateModule } from './state/state.module';
import { LocationModule } from './location/location.module';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { ApolloServerPlugin } from '@apollo/server';

  

@Module({
   imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      introspection: true,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault() as unknown as ApolloServerPlugin],
    }),
    PrismaModule,
    StateModule,
    LocationModule,
  ],})
export class AppModule {}