import { Workout } from '../entities/workout/workout';
import { BaseRepository } from './base.repository';

export abstract class WorkoutRepository extends BaseRepository<Workout> {}
