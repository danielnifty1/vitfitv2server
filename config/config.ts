import { Injectable } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import {
  TypeOrmModule,
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';

import { Book } from 'src/user/entity/booking.entity';

import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

export default class TypeOrmConfig {
  static getOrmConfig(configService: ConfigService): TypeOrmModuleOptions {
    console.log("this is the db host for config = "+ process.env.DB_HOST)

    console.log("this is the db username for config = "+  process.env.DB_USERNAME)

    console.log("this is the db password for config = "+  process.env.DB_PASSWORD)

    console.log("this is the db database for config = "+ process.env.DB_NAME)

    console.log("this is the db port for config = "+ parseInt( process.env.PORT))


    return {
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt( process.env.DB_PORT),

      username:  process.env.DB_USERNAME,
      password:  process.env.DB_PASSWORD,
      database:  process.env.DB_NAME,

      autoLoadEntities:true,

      synchronize: true,
    };
  }
}

export const typeOrmConfigAsync: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  useFactory: async (
    ConfigService: ConfigService,
  ): Promise<TypeOrmModuleOptions> => TypeOrmConfig.getOrmConfig(ConfigService),

  inject: [ConfigService],
};
