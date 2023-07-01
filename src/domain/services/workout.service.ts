import { Inject, Injectable } from '@nestjs/common';
import { Workout } from '../entities/workout/workout';
import { WorkoutRepository } from '../repositories/workout.repository';
import { BaseService } from './base.service';

@Injectable()
export class WorkoutService extends BaseService<Workout> {
  constructor(private readonly repo: WorkoutRepository) {
    super(repo);
  }
}
