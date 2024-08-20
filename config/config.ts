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
      host: 'bp78i02qwtg5oaw3uiac-mysql.services.clever-cloud.com',
      port:3306,

      username: 'uhjxouvvx5ztaxf0',
      password: '8brcWA7xP74Lwg3JPjUX',
      database: 'bp78i02qwtg5oaw3uiac',

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
