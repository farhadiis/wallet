import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { WalletModule } from './wallet/wallet.module';
import { DiscountModule } from './discount/discount.module';
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [
    UserModule,
    WalletModule,
    DiscountModule,
    MongooseModule.forRoot('mongodb://admin:1234@localhost/admin')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
