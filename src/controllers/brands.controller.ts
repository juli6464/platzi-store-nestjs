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

@Controller('brands')
export class BrandsController {
  @Get()
  getBrands(@Query('limit') limit = 100, @Query('offset') offset = 0) {
    return {
      message: `brands: limit=> ${limit} offset=> ${offset} `,
    };
  }

  @Get('filter')
  getProductFilter() {
    return {
      message: `yo soy un filter`,
    };
  }

  @Get(':brandId')
  getOne(@Param('brandId') brandId: string) {
    return {
      message: `brand ${brandId}`,
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
      message: `brand ${id} deleted`,
    };
  }
}
