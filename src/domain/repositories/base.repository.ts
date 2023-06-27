export interface BaseRepository<T> {
  create(item: T): Promise<T>;
  findById(id: string): Promise<T | null>;
  find(item: T): Promise<T[]>;
  update(id: string, item: T): Promise<T | null>;
  delete(id: string): Promise<boolean>;
}
