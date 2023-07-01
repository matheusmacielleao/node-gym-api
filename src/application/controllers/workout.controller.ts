import { Workout } from 'src/domain/entities/workout/workout';
import { BaseController } from './base.controller';
import { WorkoutService } from 'src/domain/services/workout.service';
import { Controller } from '@nestjs/common';

@Controller('workout')
export class WorkoutController extends BaseController<Workout> {
  constructor(private readonly workoutService: WorkoutService) {
    super(workoutService);
  }
}
