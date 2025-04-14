
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: "users" })
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column("varchar", { nullable: false })
    fullName: string

    @Column("varchar", { nullable: false })
    email: string

    @Column("varchar", { nullable: false })
    password: string

    @Column("boolean", { nullable: false, default: true })
    isActive: boolean

    @Column("timestamptz", { default: () => "CURRENT_TIMESTAMP" })
    createdAt: Date

    @Column("timestamptz", { nullable: true })
    updatedAt: Date
}