import { MongoUserRepository } from 'src/infra/mongo-db/repositories/user.repository';
import { User } from '../entities/people/user';
import { BaseService } from './base.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService extends BaseService<User> {
  constructor(private readonly userRepo: MongoUserRepository) {
    super(userRepo);
  }
}
