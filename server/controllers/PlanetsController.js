import { planetService } from "../services/PlanetService.js";
import BaseController from "../utils/BaseController.js";



export class PlanetsController extends BaseController {
  constructor() {
    super('api/planets')
    this.router
      .get('', this.getAll)
      .post('', this.create)
  }

  async getAll(req, res, next) {
    try {
      const planets = await planetService.getAll()
      return res.send(planets)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      const newPlanet = await planetService.create(req.body)
      return res.send(newPlanet)
    } catch (error) {
      next(error)
    }
  }
}