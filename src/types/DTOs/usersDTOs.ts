export type CreateUserDto = {
    fullName: string
    email: string
    password: string
}

export type UpdateUserDto = {
    id: number
} & CreateUserDto

// TRANSFORMAR EM CLASSES