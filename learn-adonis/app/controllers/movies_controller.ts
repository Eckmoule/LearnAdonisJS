import Movie from '#models/movie'
import MovieService from '#services/movie_service'
import { Exception } from '@adonisjs/core/exceptions'
import type { HttpContext } from '@adonisjs/core/http'
import app from '@adonisjs/core/services/app'
import fs from 'node:fs/promises'

export default class MoviesController {
  async index({ view }: HttpContext) {
    const movies = await MovieService.getMovies()
    return view.render('pages/home', { movies })
  }

  async show({ view, params }: HttpContext) {
    const url = app.makeURL(`resources/movies/${params.slug}.html`)

    try {
      const file = await fs.readFile(url, 'utf8')
      const movie = new Movie()
      movie.title = 'title'
      movie.summary = 'summary'
      view.share({ movie })
    } catch (error) {
      throw new Exception(`Could not find a movie called ${params.slug}`, {
        code: 'E_NOT_FOUND',
        status: 404,
      })
    }
    //return ctx.view.render('pages/movies/show', { movie })
    return view.render('pages/movies/show')
  }
}
