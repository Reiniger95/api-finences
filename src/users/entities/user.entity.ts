import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'

@Entity({ name: 'base_usuarios' })
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 10 })
  nome: string

  @Column({ length: 100 })
  senha: string

  @Column({ length: 100 })
  email: string
}
