
import { CreateLoginDto, CreateUserDto, UpdateUserDto } from 'src/types/DTOs/usersDTOs'
import { CustomException } from 'src/expections/CustomException'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { JwtService } from '@nestjs/jwt'
import { Repository } from 'typeorm'
import { User } from 'src/entities/user'
import env from 'src/config/env'

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async createUser(model: CreateUserDto) { // TODO: Regras de negócio de criação
    try {
      return await this.usersRepository.save(model)
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

  async updateUser(id: number, model: UpdateUserDto) { // TODO: Regras de negócio de criação
    try {
      return await this.usersRepository.update({ id: id }, model)
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

  async listUsers() { // TODO: Paginação
    try {
      return await this.usersRepository.find()
    }
    catch (ex) {
      throw new CustomException(500, (ex as Error).message)
    }
  }

  async login(model: CreateLoginDto) {
    try {
      const user = await this.usersRepository.findOneBy({
        email: model.email,
        password: model.password,
      })

      if (!user) throw new CustomException(401, "Credenciais inválidas.")

      return await this.jwtService.signAsync(
        {
          id: user.id,
          name: user.fullName,
        },
        {
          secret: env.JWT_SECRET(),
        },
      )
    }
    catch (ex) {
      throw new CustomException(500, (ex as Error).message)
    }
  }
}
