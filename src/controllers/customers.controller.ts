import { Controller, Get, Query, Param, Post, Body } from '@nestjs/common';

@Controller('customers')
export class CustomersController {
  @Get()
  getCustomers(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
  ) {
    return {
      message: `customers: limit=> ${limit} offset=> ${offset} `};
  }

  @Get('filter')
  getProductFilter() {
    return {
      message:`yo soy un filter`};
  }

  @Get(':customerId')
  getOne(@Param('customerId') customerId: string) {
    return {
      message:`customer ${customerId}`};
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'accion de crear',
      payload,
    };
  }
}
