import { Document, model, Schema, Types } from 'mongoose';
import { UserModel } from './user.model';
import { InstructorModel } from './instructor.model';

export interface WorkoutSerie {
  exercice: string;
  reps: number;
  series: number;
}

export interface Workout extends Document {
  date: string;
  user: Types.ObjectId;
  instructor: Types.ObjectId;
  mon: WorkoutSerie[] | null;
  tue: WorkoutSerie[] | null;
  wed: WorkoutSerie[] | null;
  thu: WorkoutSerie[] | null;
  fri: WorkoutSerie[] | null;
  sat: WorkoutSerie[] | null;
  sun: WorkoutSerie[] | null;
}

const workoutSerieSchema = new Schema<WorkoutSerie>({
  exercice: { type: String, required: true },
  reps: { type: Number, required: true },
  series: { type: Number, required: true },
});

const workoutSchema = new Schema<Workout>({
  date: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  instructor: {
    type: Schema.Types.ObjectId,
    ref: 'Instructor',
    required: true,
  },
  mon: { type: [workoutSerieSchema], required: false },
  tue: { type: [workoutSerieSchema], required: false },
  wed: { type: [workoutSerieSchema], required: false },
  thu: { type: [workoutSerieSchema], required: false },
  fri: { type: [workoutSerieSchema], required: false },
  sat: { type: [workoutSerieSchema], required: false },
  sun: { type: [workoutSerieSchema], required: false },
});

export const WorkoutModel = model<Workout>('Workout', workoutSchema);
