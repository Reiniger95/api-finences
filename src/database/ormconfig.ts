import { join } from 'path'
import 'reflect-metadata'
import { DataSource, DataSourceOptions } from 'typeorm'

export const connectionOptions = new DataSource({
  migrationsTableName: 'migrations',
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'db_finences',
  synchronize: false,
  dropSchema: false,
  connectTimeout: 1000000000,
  acquireTimeout: 1000000000,
  logging: true,
  entities: [join(__dirname, '/../**/*.entity{.ts,.js}')],
  migrations: [join(__dirname, 'path-to-migrations-dir/*{.ts,.js}')]
})
