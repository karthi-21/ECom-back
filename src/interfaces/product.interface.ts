import { Document } from 'mongoose';

export interface Product extends Document {
  readonly name: string;
  readonly img: string;
  readonly price: string;
  readonly discount: string;
}
