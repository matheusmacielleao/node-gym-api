import { Module } from '@nestjs/common';
import { UserModel } from './models/user.model';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoUserRepository } from './repositories/user.repository';
import { UserRepository } from 'src/domain/repositories/user.repository';
import { InstructorRepository } from 'src/domain/repositories/instructor.repository';
import { MongoInstructorRepository } from './repositories/instructor.repository';
import { InstructorModel } from './models/instructor.model';
import { WorkoutRepository } from 'src/domain/repositories/workout.repository';
import { MongoWorkoutRepository } from './repositories/workout.repository';
import { WorkoutModel } from './models/workout.model';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:8081/gym'),
    MongooseModule.forFeature([{ name: 'User', schema: UserModel.schema }]),
    MongooseModule.forFeature([
      { name: 'Instructor', schema: InstructorModel.schema },
    ]),
    MongooseModule.forFeature([
      { name: 'Workout', schema: WorkoutModel.schema },
    ]),
  ],
  controllers: [],
  exports: [
    MongooseModule.forRoot('mongodb://localhost:8081/gym'),
    MongooseModule.forFeature([{ name: 'User', schema: UserModel.schema }]),
    MongooseModule.forFeature([
      { name: 'Instructor', schema: InstructorModel.schema },
    ]),
    MongooseModule.forFeature([
      { name: 'Workout', schema: WorkoutModel.schema },
    ]),
    UserRepository,
    InstructorRepository,
    WorkoutRepository,
  ],
  providers: [
    { provide: UserRepository, useClass: MongoUserRepository },
    { provide: InstructorRepository, useClass: MongoInstructorRepository },
    { provide: WorkoutRepository, useClass: MongoWorkoutRepository },
  ],
})
export class MongoModule {}
