import { User } from 'src/domain/entities/people/user';
import { MongoBaseRepository } from './mongo-base.repository';

import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MongoUserRepository extends MongoBaseRepository<User> {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {
    super(userModel);
  }

  async findById(cpf: string): Promise<User | null> {
    return this.model.findOne({ cpf }).exec();
  }

  async delete(cpf: string): Promise<boolean> {
    const result = await this.model.deleteOne({ cpf }).exec();
    return result.deletedCount === 1;
  }
}
