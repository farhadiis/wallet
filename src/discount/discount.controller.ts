import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { DiscountService } from './discount.service';
import { CreateDiscountDTO } from './dto/create.discount.dto';

@Controller('discount')
export class DiscountController {
  constructor(private readonly discountService: DiscountService) {}

  @Post('/addcopon/')
  async addCopon(@Body() createDiscountDto: CreateDiscountDTO) {
    return this.discountService.createDiscount(createDiscountDto);
  }

  @Get('/searchcopon')
  findOne(@Query('id') id: number) {
    return this.discountService.userSearchDiscount(id);
  }

  @Patch('/codetakhfif/taghireCopon/:id')
  update(@Param('id') id: number, @Body() updateDiscountDto) {
    return this.discountService.updateDiscount(id, updateDiscountDto);
  }

  @Delete('/userWallet/usecopon/deletecopon/:id')
  remove(@Param('id') id: number) {
    return this.discountService.removeDiscount(id);
  }
}
export class Discountcontroller {}
/*@Get()
  findAll() {
    return this.discountService.findAll();
  }*/
