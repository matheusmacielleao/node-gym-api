import { Injectable } from '@nestjs/common';
import { MongoUserRepository } from './user.repository';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/domain/entities/people/user';

@Injectable()
export class MongoInstructorRepository extends MongoUserRepository {
  constructor(
    @InjectModel('Instructor') private readonly instructorModel: Model<User>,
  ) {
    super(instructorModel);
  }
}
