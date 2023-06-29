import { Injectable } from '@nestjs/common';
import { Instructor } from '../entities/people/instructor';
import { InstructorRepository } from '../repositories/instructor.repository';
import { BaseService } from './base.service';

@Injectable()
export class InstructorService extends BaseService<Instructor> {
  constructor(private readonly instructorRepo: InstructorRepository) {
    super(instructorRepo);
  }
}
