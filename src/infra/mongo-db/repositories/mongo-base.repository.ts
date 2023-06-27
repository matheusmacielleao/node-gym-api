import { Model, FilterQuery } from 'mongoose';
import { BaseRepository } from 'src/domain/repositories/base.repository';

export abstract class MongoBaseRepository<T> implements BaseRepository<T> {
  constructor(protected readonly model: Model<T>) {}

  async create(item: T): Promise<T> {
    return this.model.create(item);
  }

  async findById(id: string): Promise<T | null> {
    return this.model.findById(id).exec();
  }

  async update(id: string, item: T): Promise<T | null> {
    return this.model.findByIdAndUpdate(id, item, { new: true }).exec();
  }

  async delete(id: string): Promise<boolean> {
    const result = await this.model.deleteOne({ _id: id }).exec();
    return result.deletedCount === 1;
  }

  async findOne(query: FilterQuery<T>): Promise<T | null> {
    return this.model.findOne(query).exec();
  }

  async find(query: FilterQuery<T> = {}): Promise<T[]> {
    return this.model.find(query).exec();
  }
}
