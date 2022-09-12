import { Module } from '@nestjs/common'
import { DatabaseModule } from '../database/database.module'
import { ValuesController } from './values.controller'
import { baseValueProviders } from './values.providers'
import { ValuesService } from './values.service'

@Module({
  imports: [DatabaseModule],
  controllers: [ValuesController],
  providers: [...baseValueProviders, ValuesService]
})
export class ValuesModule {}
