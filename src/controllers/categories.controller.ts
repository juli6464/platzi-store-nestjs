import {
  Controller,
  Get,
  Param,
  Query,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get()
  getCategories(@Query('limit') limit = 100, @Query('offset') offset = 0) {
    return {
      message: `categories: limit=> ${limit} offset=> ${offset} `,
    };
  }

  @Get('filter')
  getProductFilter() {
    return {
      message: `yo soy un filter`,
    };
  }

  @Get(':categoryId')
  getOne(@Param('categoryId') categoryId: string) {
    return {
      message: `category ${categoryId}`,
    };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'accion de crear',
      payload,
    };
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      id,
      payload,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return {
      message: `category ${id} deleted`,
    };
  }

  // @Get(':id/products/:productId')
  // getCategory(@Param('productId') productId: string, @Param('id') id: string) {
  //   return `product ${productId} and ${id}`;
  // }
}
