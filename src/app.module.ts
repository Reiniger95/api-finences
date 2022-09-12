import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ValuesModule } from './values/values.module';

@Module({
  imports: [UsersModule, ValuesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
