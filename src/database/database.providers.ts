// import { DataSource } from 'typeorm'

// export const databaseProviders = [
//   {
//     provide: 'DATA_SOURCE',
//     useFactory: async () => {
//       const dataSource = new DataSource({
//         migrationsTableName: 'migrations',
//         type: 'mysql',
//         host: 'localhost',
//         port: 3306,
//         username: 'root',
//         password: 'root',
//         database: 'db_finences',
//         entities: [__dirname + '/../**/*.entity{.ts,.js}'],
//         synchronize: true
//       })

//       return dataSource.initialize()
//     }
//   }
// ]
import { DataSource } from 'typeorm'
import { connectionOptions } from './ormconfig'

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory(): Promise<DataSource> {
      return connectionOptions.initialize()
    }
  }
]
