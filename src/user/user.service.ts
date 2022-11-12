import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from "./dto/create.user.dto";

@Injectable()
export class UserService {

  public createUser(data: CreateUserDTO): string {

    return 'User created...';
  }

}
