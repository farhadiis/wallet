import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type DiscountDocument = HydratedDocument<Discount>;

@Schema()
export class Discount {
  @Prop({ required: true })
  coponId: string;

  @Prop({ required: true })
  coponPrice: number;

  @Prop({ required: true })
  coponQty: number;

  @Prop()
  coponName: string;
}

export const DiscountSchema = SchemaFactory.createForClass(Discount);


