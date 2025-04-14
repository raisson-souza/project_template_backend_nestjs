
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
    return await this.usersRepository.save(userModel)
  }

  async getUser(id: number) {
    return this.usersRepository.findOneBy({ id })
  }

  async updateUser(id: number, userModel: any) {
    return await this.usersRepository.update({ id: id }, userModel)
  }

  async deleteUser(id: number) {
    return await this.usersRepository.delete(id)
  }

  async listUsers() {
    return await this.usersRepository.find()
  }
}
