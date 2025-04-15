import { AuthGuard } from 'src/auth/auth.guard'
import { Body, ClassSerializerInterceptor, Controller, Delete, Get, Param, Post, Put, UseGuards, UseInterceptors } from '@nestjs/common'
import { CreateLoginDto, CreateUserDto, UpdateUserDto, UserDto } from 'src/types/DTOs/usersDTOs'
import { UsersService } from 'src/services/user.service'

@Controller("/users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Post("/create")
  async createUser(@Body() request: CreateUserDto): Promise<UserDto> {
    const newUser = await this.usersService.createUser(request)
    return new UserDto({...newUser})
  }

  @UseGuards(AuthGuard)
  @UseInterceptors(ClassSerializerInterceptor)
  @Get("/get/:id")
  async getUser(@Param('id') id: string): Promise<UserDto> {
    const user = await this.usersService.getUser(Number.parseInt(id))
    return new UserDto({...user})
  }

  @UseGuards(AuthGuard)
  @UseInterceptors(ClassSerializerInterceptor)
  @Put("/put/:id")
  async updateUser(
    @Param('id') id: string,
    @Body() request: UpdateUserDto,
  ): Promise<UserDto> {
    const user = await this.usersService.updateUser(Number.parseInt(id), request)
    return new UserDto({...user.raw})
  }

  @UseGuards(AuthGuard)
  @Delete("/delete/:id")
  async deleteUser(@Param('id') id: string) {
    return await this.usersService.deleteUser(Number.parseInt(id))
  }

  @UseGuards(AuthGuard)
  @UseInterceptors(ClassSerializerInterceptor)
  @Get("/list")
  async listUsers(): Promise<UserDto[]> {
    const users = await this.usersService.listUsers()
    return users.map(user => new UserDto({...user}))
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Post("/login")
  async login(@Body() request: CreateLoginDto): Promise<string> {
    return await this.usersService.login(request)
  }
}
