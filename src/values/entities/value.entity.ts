import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'

@Entity({ name: 'base_valores' })
export class Value {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  idUser: number
  @Column()
  tipo: string
  @Column()
  valor: number
  @Column()
  entradaSaida: string
  @Column()
  data: Date
}
