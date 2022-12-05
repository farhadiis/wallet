import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/create.user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  public async createUser(data: CreateUserDTO): Promise<any> {
    const createdUser = new this.userModel({
      email: data.email,
      firstname: data.firstName,
      lastname: '--',
    });
    return createdUser.save();
  }

  async findAll(): Promise<any> {
    return this.userModel
      .find({
        firstname: 'ali',
      })
      .exec();
  }
}
