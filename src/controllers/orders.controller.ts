import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';

@Controller('orders')
export class OrdersController {
  @Get()
  getUsers(@Query('limit') limit = 100, @Query('offset') offset = 0) {
    return {
      message: `order: limit=> ${limit} offset=> ${offset} `,
    };
  }

  @Get('filter')
  getOrderFilter() {
    return {
      message: `yo soy un filter`,
    };
  }

  @Get('orderId')
  getOne(@Param('orderId') orderId: string) {
    return {
      message: `order ${orderId}`,
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
      message: `order ${id} deleted`,
    };
  }
}
