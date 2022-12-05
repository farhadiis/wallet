import { DefaultValuePipe } from '@nestjs/common';
import { IsNotEmpty } from 'class-validator';

export class CreateWalletDTO {
  @IsNotEmpty({ message: 'userId lazeme' }) // ke az db khunde mishe
  public userId: string;
  public mojudi?: number; //default sefr
  public coponPrice?: number;
  public tedadeYekCodeDarWallet?: number;

  public estefadeazcopon?: boolean;
  public coponId?: number;
}
