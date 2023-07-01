import { MongoBaseRepository } from './mongo-base.repository';

import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Workout } from '../models/workout.model';

@Injectable()
export class MongoWorkoutRepository extends MongoBaseRepository<Workout> {
  constructor(
    @InjectModel('Workout') private readonly userModel: Model<Workout>,
  ) {
    super(userModel);
  }
}
