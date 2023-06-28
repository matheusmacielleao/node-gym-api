import { User } from '../entities/people/user';
import { BaseRepository } from './base.repository';

export abstract class UserRepository extends BaseRepository<User> {}
