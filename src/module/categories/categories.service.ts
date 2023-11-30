import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Categories } from './categories.schema';
import { Model } from 'mongoose';
import { CreateCategoriesDto, UpdateCategoriesDto } from './dto';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Categories.name) private categoriesModel: Model<Categories>,
  ) {}

  async create(createCategoriesDto: CreateCategoriesDto) {
    return await this.categoriesModel.create(createCategoriesDto);
  }

  async findAll() {
    return await this.categoriesModel.find({});
  }

  async findOne(id: string) {
    return await this.categoriesModel.findById(id);
  }

  async update(id: string, updateCategoriesDto: UpdateCategoriesDto) {
    return await this.categoriesModel.findByIdAndUpdate(
      id,
      updateCategoriesDto,
    );
  }

  async remove(id: string) {
    return await this.categoriesModel.findByIdAndDelete(id);
  }
}
