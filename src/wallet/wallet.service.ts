import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import {  WalletDocument } from './entities/wallet.entity';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { HydratedDocument, SchemaTypes } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { UpdateWalletDto } from './dto/update-wallet.dto';
import { CreateDiscountDTO } from 'src/discount/dto/create.discount.dto';
import { Discount } from 'src/discount/entities/discount.entity';
import { Wallet } from 'src/wallet/entities/wallet.entity';
import {  DiscountModule } from 'src/discount/discount.module';
import { threadId } from 'worker_threads';



@Injectable()
export class WalletService {
  constructor(
    @InjectModel('Wallet')
    private readonly walletModel: Model<WalletDocument>,
  ) {}

  async createWallet(createWalletDto: CreateWalletDto): Promise<Wallet> {
     const createMyWallet = await this.walletModel.create(createWalletDto)
      return createMyWallet.save();
  }

  async findmyWallet(userId: string): Promise<Wallet> {
    const showMyWallet = await this.walletModel.findOne({ userId });
    return showMyWallet;
  }

async addDiscount(userId: string, coponId, coponPrice, coponQty,tedadeYekCodeDarWallet, mojudi): Promise<Wallet> {

 const walleteMoreseNazar = await this.walletModel.findOne({userId} ).exec()
 const usedCoponInWallet = await this.walletModel.findById({coponId}).exec()
 if(usedCoponInWallet &&  coponQty.usedCoponInWallet> 0 && tedadeYekCodeDarWallet.walleteMoreseNazar ==0){
coponQty.usedCoponInWallet -= coponQty.usedCoponInWallet;
  mojudi.walleteMoreseNazar += coponPrice.usedCoponInWallet;
  return walleteMoreseNazar.save() && usedCoponInWallet.save()
}
else if(!usedCoponInWallet){
  console.log(" code takhfife morede nazar mojud nisr");
}
else if(tedadeYekCodeDarWallet.walleteMoreseNazar> 1){
  console.log(" faghat yekbar mituni az in code estefade koni");
}
else if(coponQty.usedCoponInWallet == 0 ){
  console.log(" mohlate estefadat az code takhfif tamum shode");
}

