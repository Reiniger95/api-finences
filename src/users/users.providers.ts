import { Connection } from 'typeorm'
import { User } from './entities/user.entity'

export const baseUsersProviders = [
  {
    provide: 'BASEUSER_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(User),
    inject: ['DATABASE_CONNECTION']
  }
]
