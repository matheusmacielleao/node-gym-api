import { Module } from '@nestjs/common';
import { MongoModule } from 'src/infra/databases/mongo-db/mongo.module';
import { UserController } from './controllers/user.controller';
import { UserService } from 'src/domain/services/user.service';
import { InstructorController } from './controllers/instructor.controller';
import { InstructorService } from 'src/domain/services/instructor.service';

@Module({
  imports: [MongoModule],
  controllers: [UserController, InstructorController],
  providers: [UserService, InstructorService],
})
export class AppModule {}
