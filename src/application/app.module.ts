import { Module } from '@nestjs/common';
import { MongoModule } from 'src/infra/mongo-db/mongo.module';
import { UserController } from './controllers/user.controller';
import { UserService } from 'src/domain/services/user.service';

@Module({
  imports: [MongoModule],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}
