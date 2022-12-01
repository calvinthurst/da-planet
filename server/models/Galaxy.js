import { Schema } from "mongoose";
import { galaxyService } from "../services/GalaxyService.js";



export const GalaxySchema = new Schema({
  name: { type: String, required: true },
  stars: { type: Number, require: true },
  planetCount: { type: Number, required: true, ref: 'Planet' }
}, {
  timestamps: true, toJSON: { virtuals: true }
}
)
GalaxySchema.virtual('planet', {
  localField: 'id',
  ref: 'Planet',
  foreignField: 'galaxyId'
})

