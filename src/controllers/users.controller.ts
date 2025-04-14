import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { CreateUserDto, UpdateUserDto } from 'src/types/DTOs/usersDTOs'
import { UsersService } from 'src/services/user.service'

@Controller("/users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get("/")
  default() {
    return "Usuários"
  }

  @Post("/create")
  async createUser(@Body() request: CreateUserDto) {
    return await this.usersService.createUser(request)
  }

  @Get("/get/:id")
  async getUser(@Param('id') id: string) {
    return await this.usersService.getUser(Number.parseInt(id))
  }

  @Put("/put/:id")
  async updateUser(
    @Param('id') id: string,
    @Body() request: UpdateUserDto,
  ) {
    return await this.usersService.updateUser(Number.parseInt(id), request)
  }

  @Delete("/delete/:id")
  async deleteUser(@Param('id') id: string) {
    return await this.usersService.deleteUser(Number.parseInt(id))
  }

  @Get("/list")
  async listUsers() {
    return await this.usersService.listUsers()
  }

  // autenticação - https://docs.nestjs.com/security/authentication
  // serialização (para resposes) - https://docs.nestjs.com/techniques/serialization
}
