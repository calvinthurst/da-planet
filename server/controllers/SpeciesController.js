import { speciesService } from "../services/SpeciesService.js"
import BaseController from "../utils/BaseController.js"




export class SpeciesController extends BaseController {
  constructor() {
    super('api/species')
    this.router
      .get('', this.getAll)
  }

  async getAll(req, res, next) {
    try {
      const species = await speciesService.getAll()
      return res.send()
    } catch (error) {
      next(error)
    }
  }
}