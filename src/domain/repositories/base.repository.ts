export abstract class BaseRepository<T> {
  abstract create(item: T): Promise<T>;
  abstract findById(id: string): Promise<T | null>;
  abstract find(item: T): Promise<T[]>;
  abstract update(id: string, item: T): Promise<T | null>;
  abstract delete(id: string): Promise<boolean>;
}
