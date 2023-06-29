import { Controller } from '@nestjs/common';
import { Instructor } from 'src/domain/entities/people/instructor';
import { BaseController } from './base.controller';
import { InstructorService } from 'src/domain/services/instructor.service';

@Controller('instructors')
export class InstructorController extends BaseController<Instructor> {
  constructor(private readonly instructorService: InstructorService) {
    super(instructorService);
  }
}
