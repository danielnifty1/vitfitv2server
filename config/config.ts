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
    // console.log("this is the db host = "+ process.env.DB_NAME)
    return {
      type: 'mysql',
      host: configService.get('DB_HOST'),
      port: configService.get('PORT'),

      username: configService.get('DB_USERNAME'),
      password: configService.get('DB_PASSWORD'),
      database: configService.get('DB_NAME'),

      entities: [Book],

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
