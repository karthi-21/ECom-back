import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
  name: String,
  img: String,
  price: String,
  discount: String,
});
