import { BaseRepository } from '../repositories/base.repository';

export class BaseService<T> {
  constructor(protected repository: BaseRepository<T>) {}

  async create(item: T): Promise<T> {
    return this.repository.create(item);
  }

  async findById(id: string): Promise<T | null> {
    return this.repository.findById(id);
  }

  async find(item: T): Promise<T[]> {
    return this.repository.find(item);
  }

  async update(id: string, item: T): Promise<T | null> {
    return this.repository.update(id, item);
  }

  async delete(id: string): Promise<boolean> {
    return this.repository.delete(id);
  }
}
