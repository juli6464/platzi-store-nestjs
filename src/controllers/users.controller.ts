import { Controller, Query, Get, Param, Post, Body } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getUsers(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
  ) {
    return {
      message: `users: limit=> ${limit} offset=> ${offset} `};
  }

  @Get('filter')
  getProductFilter() {
    return {
      message:`yo soy un filter`};
  }

  @Get(':userId')
  getOne(@Param('userId') userId: string) {
    return {
      message:`user ${userId}`};
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'accion de crear',
      payload,
    };
  }
}
