import {
  Post,
  Get,
  Patch,
  Delete,
  Param,
  Body,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { BaseService } from 'src/domain/services/base.service';

export abstract class BaseController<T> {
  constructor(protected service: BaseService<T>) {}

  @Post()
  async create(@Body() item: T): Promise<T> {
    try {
      return await this.service.create(item);
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Failed to create item');
    }
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<T> {
    try {
      const item = await this.service.findById(id);

      if (!item) {
        throw new NotFoundException('Item not found');
      }

      return item;
    } catch (error) {
      throw new InternalServerErrorException('Failed to fetch item');
    }
  }

  @Get()
  async getAll(): Promise<T[]> {
    try {
      const item = await this.service.find({} as any);

      if (!item) {
        throw new NotFoundException('Item not found');
      }

      return item;
    } catch (error) {
      throw new InternalServerErrorException('Failed to fetch item');
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() item: T): Promise<T> {
    try {
      const updatedItem = await this.service.update(id, item);

      if (!updatedItem) {
        throw new NotFoundException('Item not found');
      }

      return updatedItem;
    } catch (error) {
      throw new InternalServerErrorException('Failed to update item');
    }
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    try {
      const success = await this.service.delete(id);

      if (!success) {
        throw new NotFoundException('Item not found');
      }
    } catch (error) {
      throw new InternalServerErrorException('Failed to delete item');
    }
  }
}
