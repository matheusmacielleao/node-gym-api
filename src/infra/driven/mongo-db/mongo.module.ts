import { Module } from '@nestjs/common';
import { UserModel } from './models/user.model';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoUserRepository } from './repositories/user.repository';
import { UserRepository } from 'src/domain/repositories/user.repository';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:8081/gym'),
    MongooseModule.forFeature([{ name: 'User', schema: UserModel.schema }]),
  ],
  controllers: [],
  exports: [
    MongooseModule.forRoot('mongodb://localhost:8081/gym'),
    MongooseModule.forFeature([{ name: 'User', schema: UserModel.schema }]),
    UserRepository,
  ],
  providers: [{ provide: UserRepository, useClass: MongoUserRepository }],
})
export class MongoModule {}
