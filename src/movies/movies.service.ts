import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import axios from 'axios'
import { Movie, MovieDocument } from './movie.model'
import * as dotenv from 'dotenv'

dotenv.config()

@Injectable()
export class MoviesService {
  constructor(
    @InjectModel(Movie.name) private movieModel: Model<MovieDocument>
  ) {}

  private readonly apiKey = process.env.API_KEY
  private readonly apiUrlPopular = process.env.API_URL_POPULAR

  async downloadMovies(): Promise<void> {
    const response = await axios.get(
      `${this.apiUrlPopular}?api_key=${this.apiKey}`
    )

    const movies = response.data.results.slice(0, 10)
    const movieDocuments = movies.map(movie => ({
      title: movie.title,
      releaseDate: movie.release_date,
      overview: movie.overview,
      adult: movie.adult,
      backdropPath: movie.backdropPath,
      genre_ids: movie.genre_ids,
      id: movie.id,
      original_language: movie.original_language,
      original_title: movie.original_title,
      popularity: movie.popularity,
      poster_path: movie.poster_path,
      video: movie.video,
      vote_average: movie.vote_average,
      vote_count: movie.vote_count
    }))

    await this.movieModel.deleteMany({})
    await this.movieModel.insertMany(movieDocuments)
  }

  async getMovies(): Promise<Movie[]> {
    return this.movieModel.find().exec()
  }
}
