import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type MovieDocument = Movie & Document

@Schema()
export class Movie {
  @Prop()
  title: string

  @Prop()
  releaseDate: string

  @Prop()
  overview: string
}

export const MovieSchema = SchemaFactory.createForClass(Movie)
