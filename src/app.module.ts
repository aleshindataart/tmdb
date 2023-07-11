import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { MoviesModule } from './movies.module'
import { DatabaseModule } from './database.module'

@Module({
  imports: [MoviesModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
