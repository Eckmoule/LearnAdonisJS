import app from '@adonisjs/core/services/app'
import fs from 'node:fs/promises'

export default class MovieService {
  static async getMovies() {
    const url = app.makeURL('resources/movies')
    const files = await fs.readdir(url)
    const movies = files.map((file) => file.replace('.html', ''))
    return movies
  }
}
