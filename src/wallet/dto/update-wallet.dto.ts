import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty } from 'class-validator';
import { CreateWalletDTO } from '././create-wallet.dto';

export class UpdateWalletDto extends PartialType(CreateWalletDTO) {
  @IsNotEmpty()
  public userId: string;
  public coponId: number;
  public coponPrice: number;
  public coponQty: number;
  public tedadeYekCodeDarWallet: number;
  public mojudi: number;


}
