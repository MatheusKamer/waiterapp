/**
 * Represents a Category model in the MongoDB database.
 *
 * This model includes the following fields:
 * - `name`: A string representing the name of the category.
 * - `description`: A string representing the description of the category.
 * - `imagePath`: A string representing the path to the image of the category.
 * - `price`: A number representing the price associated with the category.
 * - `ingredients`: An array of objects representing the ingredients of the category,
 *   each containing:
 *   - `name`: A string representing the name of the ingredient.
 *   - `icon`: A string representing the icon associated with the ingredient.
 * - `category`: An ObjectId referencing another Category.
 *
 * @module models/Category
 * @requires mongoose
 */
import { model, Schema } from 'mongoose'

export const Category = model('Category', new Schema({
  name: {
    type: String,
    required: true,
  },
  descripton: {
    type: String,
    required: true,
  },
  imagePath: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  ingredients: {
    type: [{
      name: {
        type: String,
        required: true,
      },
      icon: {
        type: String,
        required: true,
      },
    }],
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Category',
  },
}))
