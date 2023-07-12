import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { MoviesModule } from './movies/movies.module'
import { DatabaseModule } from './database.module'
import { GenresModule } from './genres/genres.module'
import { ScheduleModule } from '@nestjs/schedule'

@Module({
  imports: [
    GenresModule,
    MoviesModule,
    DatabaseModule,
    ScheduleModule.forRoot()
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
