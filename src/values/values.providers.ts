import { Connection } from 'typeorm'
import { Value } from './entities/value.entity'

export const baseValueProviders = [
  {
    provide: 'BASEVALUE_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Value),
    inject: ['DATABASE_CONNECTION']
  }
]
