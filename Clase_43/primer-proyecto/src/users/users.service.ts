import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
// import { User } from './entities/user.entity';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocumet } from './schema/user.schema';
import { Model } from 'mongoose'

@Injectable()
export class UsersService {
  // definicion de manejo de datos en memoria
  // users: Array<User>

  constructor(@InjectModel(User.name) private userModel: Model<UserDocumet>) { }


  async create(createUserDto: CreateUserDto) {
    return await this.userModel.create(createUserDto);
  }

  async findAll() {
    return await this.userModel.find({});
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
