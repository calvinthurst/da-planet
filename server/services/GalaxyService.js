import { dbContext } from "../db/DbContext.js"



class GalaxyService {

  async getAll() {
    const galaxy = await dbContext.Galaxy.find()
    return galaxy
  }
  async create(galaxyData) {
    const galaxy = await dbContext.Galaxy.create(galaxyData)
    return galaxy
  }

}

export const galaxyService = new GalaxyService()