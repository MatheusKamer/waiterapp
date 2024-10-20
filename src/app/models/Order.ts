/**
 * Mongoose model for the Order collection.
 *
 * This model defines the schema for a Order, which includes:
 * - `name`: A required string representing the name of the order.
 * - `icon`: A required string representing the icon associated with the order.
 *
 * @module models/Order
 * @requires mongoose
 */
import { model, Schema } from 'mongoose'

export const Category = model('Order', new Schema({
  table: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['WAITING', 'IN-PRODUCTION', 'DONE'],
    default: 'WAITING',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  products: {
    type: [{
      product: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Product',
      },
      quantity: {
        type: Number,
        default: 1,
      },
    }],
    required: true,
    ref: 'Product',
  },
}))
