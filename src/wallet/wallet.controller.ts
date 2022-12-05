import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
 Query,} from '@nestjs/common';
import { WalletService } from './wallet.service';
import { CreateWalletDTO } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';

@Controller(':id/wallet')
export class WalletController {
  constructor(private readonly walletService: WalletService) {}

  @Post('./create')
  async createWallet(@Body() createWalletDto: CreateWalletDTO) {
    return this.walletService.createWallet(createWalletDto);
  }

  @Get('./myWallet')
  async findmyWallet(@Param(':Query')) {
    return this.walletService.findmyWallet(':id');
  }

@Patch('./use-discount')
addDiscount(@Param('myWallet') id: string, @Body(':id/wallet') updateWalletDto: UpdateWalletDto) {
    return this.walletService.addDiscount(updateWalletDto);
}
