import { Instructor } from '../people/instructor';
import { User } from '../people/user';
import { Exercice } from './exercice';

export interface Workout {
  date: string;
  user: User;
  instructor: Instructor;
  mon: WorkoutSerie[] | null;
  tue: WorkoutSerie[] | null;
  wed: WorkoutSerie[] | null;
  thu: WorkoutSerie[] | null;
  fri: WorkoutSerie[] | null;
  sat: WorkoutSerie[] | null;
  sun: WorkoutSerie[] | null;
}

export interface WorkoutSerie {
  exercice: Exercice;
  reps: number;
  series: number;
}
