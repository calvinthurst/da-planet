import { dbContext } from "../db/DbContext.js"



class PlanetService {
  // async createNewPlanet(body) {
  //   const newPlanet = await dbContext.Planet.create(body)
  //   return newPlanet
  // }
  async getAll() {
    const planets = await dbContext.Planet.find().populate('galaxy', 'name')
    return planets
  }

  async create(body) {
    const newPlanet = await dbContext.Planet.create(body)
    await newPlanet.populate('galaxy', 'name')
    return newPlanet
  }

}
export const planetService = new PlanetService()