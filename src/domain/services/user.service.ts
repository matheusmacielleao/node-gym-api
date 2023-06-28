import { User } from '../entities/people/user';
import { UserRepository } from '../repositories/user.repository';
import { BaseService } from './base.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService extends BaseService<User> {
  constructor(private readonly userRepo: UserRepository) {
    super(userRepo);
  }
}
