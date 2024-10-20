/**
 * Mongoose model for the Product collection.
 *
 * This model defines the schema for a Product, which includes:
 * - `name`: A required string representing the name of the product.
 * - `icon`: A required string representing the icon associated with the product.
 *
 * @module models/Product
 * @requires mongoose
 */
import { model, Schema } from 'mongoose'

export const Category = model('Product', new Schema({
  name: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
}))
