
import { CustomException } from 'src/expections/CustomException'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { User } from 'src/entities/user'

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async createUser(userModel: any) {
    try {
      return await this.usersRepository.save(userModel)
    }
    catch (ex) {
      throw new CustomException(500, (ex as Error).message)
    }
  }

  async getUser(id: number) {
    try {
      return this.usersRepository.findOneBy({ id })
    }
    catch (ex) {
      throw new CustomException(500, (ex as Error).message)
    }
  }

  async updateUser(id: number, userModel: any) {
    try {
      return await this.usersRepository.update({ id: id }, userModel)
    }
    catch (ex) {
      throw new CustomException(500, (ex as Error).message)
    }
  }

  async deleteUser(id: number) {
    try {
      return await this.usersRepository.delete(id)
    }
    catch (ex) {
      throw new CustomException(500, (ex as Error).message)
    }
  }

  async listUsers() {
    try {
      return await this.usersRepository.find()
    }
    catch (ex) {
      throw new CustomException(500, (ex as Error).message)
    }
  }
}
