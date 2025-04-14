import { IsEmail, IsNotEmpty, IsString } from "class-validator"
import { PartialType } from "@nestjs/mapped-types"
import { Transform } from 'class-transformer'

export class CreateUserDto {
    @IsString()
    fullName: string

    @IsEmail()
    email: string

    @IsString()
    @IsNotEmpty()
    password: string
}

export class UpdateUserDto extends PartialType(CreateUserDto) {
    id: number
}

export class UserDto {
    id: number

    fullName: string

    email: string

    @Transform(() => "***")
    password: string

    createdAt: Date

    updatedAt: Date | null

    isActive: boolean

    constructor(partial: Partial<UserDto>) {
        Object.assign(this, partial)
    }
}