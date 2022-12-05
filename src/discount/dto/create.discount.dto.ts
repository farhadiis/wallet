import { IsNotEmpty, IsNumber } from 'class-validator';
// import{ Discount, DiscountDocument } from "./entities/discount.entity";

export class CreateDiscountDTO {
  @IsNumber()
  @IsNotEmpty({ message: `adad,tedad gheymate hatmie.` })
  public coponNumber: number;
  public coponPrice: number;
  public coponId: string;
  public coponQty;
  public coponName: string;
}


