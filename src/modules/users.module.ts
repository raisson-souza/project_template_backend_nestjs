import { DataSource } from 'typeorm'
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from '../entities/user'
import { UsersController } from 'src/controllers/users.controller'
import { UsersService } from 'src/services/user.service'

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [TypeOrmModule],
})

export class UsersModule {
  constructor(
    protected dataSource: DataSource
  ) {}
}