import { galaxyService } from "../services/GalaxyService.js";
import { planetService } from "../services/PlanetService.js";
import BaseController from "../utils/BaseController.js";



export class GalaxyController extends BaseController {
  constructor() {
    super('api/galaxy')
    this.router
      .get('', this.getAll)
      .post('', this.create)
    // .post('/:id/planet', this.createNewPlanet)
  }

  async getAll(req, res, next) {
    try {
      const galaxy = await galaxyService.getAll()
      return res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      const newGalaxy = await galaxyService.create(req.body)
      return res.send(newGalaxy)
    } catch (error) {
      next(error)
    }
  }


  // async createNewPlanet(req, res, next) {
  //   try {
  //     req.body.galaxyId = req.params.id
  //     const newPlanet = await planetService.createNewPlanet(req.body)
  //     return res.send(newPlanet)
  //   } catch (error) {
  //     next(error)
  //   }
  // }
}