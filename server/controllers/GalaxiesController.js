import { galaxiesService } from '../services/GalaxiesService'
import BaseController from '..utils/BaseController'

export class GalaxiesController extends BaseController {
  constructor() {
    super('api/galaxies')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getById)
      .post('', this.create)
  }

  async getAll(req, res, next) {
    try {
      const galaxies = await galaxiesService.getAll(req.query)
      res.send(galaxies)
    }
  }
}
