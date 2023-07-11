import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { MoviesModule } from './movies/movies.module'
import { DatabaseModule } from './database.module'
import { GenresModule } from './genres/genres.module'

@Module({
  imports: [GenresModule, MoviesModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
