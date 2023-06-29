import { Injectable } from '@nestjs/common';
import { User } from '../entities/people/user';
import { HttpError } from '../errors/http.error';
import { UserRepository } from '../repositories/user.repository';
import { BaseService } from './base.service';

@Injectable()
export class UserService extends BaseService<User> {
  constructor(private readonly userRepo: UserRepository) {
    super(userRepo);
  }

  async create(user: User): Promise<User> {
    const userExists = await this.userRepo.findById(user.cpf);

    if (userExists) {
      throw new HttpError('User with the cpf informed already exists', 404);
    }

    return this.userRepo.create(user);
  }
}
