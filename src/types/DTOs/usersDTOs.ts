import { IsEmail, IsNotEmpty, IsString } from "class-validator"
import { PartialType } from "@nestjs/mapped-types"

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