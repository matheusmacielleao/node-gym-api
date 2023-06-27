import { Controller } from '@nestjs/common';
import { BaseController } from './base.controller';
import { User } from 'src/domain/entities/people/user';
import { UserService } from 'src/domain/services/user.service';

@Controller('users')
export class UserController extends BaseController<User> {
  constructor(private readonly userService: UserService) {
    super(userService);
  }
}
