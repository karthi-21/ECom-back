import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  Post,
  Put,
  Query,
  Res,
} from '@nestjs/common';
import { ProductDTO } from 'src/dto/product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  // add a product
  @Post('/create')
  async addProduct(@Res() res, @Body() createProductDTO: ProductDTO) {
    const product = await this.productService.addProduct(createProductDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Product has been created successfully',
      success: true,
      product,
    });
  }

  // Retrieve products list
  @Get('products')
  async getAllProduct(@Res() res) {
    const products = await this.productService.getAllProduct();
    return res.status(HttpStatus.OK).json(products);
  }

  // Fetch a particular product using ID
  @Get('product/:productID')
  async getProduct(@Res() res, @Param('productID') productID) {
    const product = await this.productService.getProduct(productID);
    if (!product) throw new NotFoundException('Product does not exist!');
    return res.status(HttpStatus.OK).json(product);
  }

  // Update a product's details
  @Put('/update')
  async updateProduct(
    @Res() res,
    @Query('productID') productID,
    @Body() createProductDTO: ProductDTO,
  ) {
    const product = await this.productService.updateProduct(
      productID,
      createProductDTO,
    );
    if (!product) throw new NotFoundException('Product does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Product has been successfully updated',
      success: true,
      product,
    });
  }

  // Delete a product
  @Delete('/delete')
  async deleteProduct(@Res() res, @Query('productID') productID) {
    const product = await this.productService.deleteProduct(productID);
    if (!product) throw new NotFoundException('Product does not exist');
    return res.status(HttpStatus.OK).json({
      message: 'Product has been deleted',
      success: true,
      product,
    });
  }
}
