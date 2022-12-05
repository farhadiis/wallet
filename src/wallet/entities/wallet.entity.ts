import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { User } from '../../user/entities/user.entity';
import { HydratedDocument } from 'mongoose';
import { Discount } from 'src/discount/entities/discount.entity';

export type WalletDocument = HydratedDocument<Wallet>;

@Schema()
export class Wallet {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name })
  userId: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Discount.name })
  coponId: string;
  discounts: Discount[];


  @Prop()
  coponPrice: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Discount.name })
  coponName: string;

  @Prop({ required: true })
  mojudi: number;

  @Prop()
  tarakoneshha?: number;

  @Prop()
  estefadeazcopon?: boolean;

  
 
}

export const WalletSchema = SchemaFactory.createForClass(Wallet);
