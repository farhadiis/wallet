import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDTO {
  @IsEmail()
  @IsNotEmpty({ message: 'email required.' })
  public email: string;

  @IsString({ message: 'firstname is string' })
  public firstName: string;
}
