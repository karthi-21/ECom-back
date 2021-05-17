import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductDTO } from 'src/dto/product.dto';
import { Product } from 'src/interfaces/product.interface';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
  ) {}
  // fetch all Products
  async getAllProduct(): Promise<Product[]> {
    const Products = await this.productModel.find().exec();
    return Products;
  }
  // Get a single Product
  async getProduct(ProductID): Promise<Product> {
    const Product = await this.productModel.findById(ProductID).exec();
    return Product;
  }
  // post a single Product
  async addProduct(productDTO: ProductDTO): Promise<Product> {
    const newProduct = await new this.productModel(productDTO);
    return newProduct.save();
  }
  // Edit Product details
  async updateProduct(
    ProductID,
    createProductDTO: ProductDTO,
  ): Promise<Product> {
    const updatedProduct = await this.productModel.findByIdAndUpdate(
      ProductID,
      createProductDTO,
      { new: true },
    );
    return updatedProduct;
  }
  // Delete a Product
  async deleteProduct(ProductID): Promise<any> {
    const deletedProduct = await this.productModel.findByIdAndRemove(ProductID);
    return deletedProduct;
  }
}
