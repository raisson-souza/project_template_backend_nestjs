import { AppController } from 'src/controllers/app.controller'
import { AppService } from '../services/app.service'
import { ConfigModule } from '@nestjs/config'
import { DataSource } from 'typeorm'
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from '../entities/user'
import { UsersModule } from './users.module'
import env from '../config/env'

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: env.DATABASE_POSTGRES.HOST(),
      port: Number.parseInt(env.DATABASE_POSTGRES.PORT()),
      username: env.DATABASE_POSTGRES.USERNAME(),
      password: env.DATABASE_POSTGRES.PASSWORD(),
      database: env.DATABASE_POSTGRES.DATABASE(),
      entities: [
        User,
      ],
      synchronize: true,
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {
  constructor(
    protected dataSource: DataSource
  ) {}
}