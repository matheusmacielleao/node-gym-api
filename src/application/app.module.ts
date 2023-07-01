import { Module } from '@nestjs/common';
import { MongoModule } from 'src/infra/databases/mongo-db/mongo.module';
import { UserController } from './controllers/user.controller';
import { UserService } from 'src/domain/services/user.service';
import { InstructorController } from './controllers/instructor.controller';
import { InstructorService } from 'src/domain/services/instructor.service';
import { WorkoutController } from './controllers/workout.controller';
import { WorkoutService } from 'src/domain/services/workout.service';

@Module({
  imports: [MongoModule],
  controllers: [UserController, InstructorController, WorkoutController],
  providers: [UserService, InstructorService, WorkoutService],
})
export class AppModule {}
