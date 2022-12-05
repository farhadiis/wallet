import { Injectable } from '@nestjs/common';
import { CreateDiscountDTO } from './dto/create.discount.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Discount, DiscountDocument } from './entities/discount.entity';

@Injectable()
export class DiscountService {
  constructor(
    @InjectModel('Discount')
    private readonly discountModel: Model<DiscountDocument>,
  ) {}

  async findAllDiscount(): Promise<Discount[]> {
    const Alldiscounts = await this.discountModel.findAll().exec();
    return Alldiscounts;
  }

  async userSearchDiscount(id: number): Promise<Discount> {
    const searchDdiscount = await this.discountModel.findById(id).exec();
    if (searchDdiscount) return searchDdiscount;
    else Error('code takhfif motabar nist!'); //try catch chejuri mishe?
  }

  async createDiscount(
    createDiscountDTO: CreateDiscountDTO,
  ): Promise<Discount> {
    const newDiscount = await this.discountModel.create(createDiscountDTO);
    return newDiscount.save();
  }

  async updateDiscount(
    id: number,
    updateDiscountDto: CreateDiscountDTO,
  ): Promise<Discount> {
    const updatedDiscount = await this.discountModel.findByIdAndUpdate(
      id,
      updateDiscountDto,
      { new: true },
    );
    return updatedDiscount;
  }

  async removeDiscount(id: number): Promise<Discount> {
    const removedDiscount = await this.discountModel.findByIdAndRemove(id);
    return removedDiscount;
  }
}
