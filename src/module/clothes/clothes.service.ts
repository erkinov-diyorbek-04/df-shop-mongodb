import { Injectable } from '@nestjs/common';
import { CreateClotheDto } from './dto/create-clothe.dto';
import { UpdateClotheDto } from './dto/update-clothe.dto';
import { Clothes } from './clothes.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ClothesService {
  constructor(
    @InjectModel(Clothes.name) private clothesModel: Model<Clothes>,
  ) {}

  async create(createClotheDto: CreateClotheDto) {
    return await this.clothesModel.create(createClotheDto);
  }

  async findAll() {
    return await this.clothesModel.find({});
  }

  async findOne(id: string) {
    return await this.clothesModel.findById(id);
  }

  async update(id: string, updateClotheDto: UpdateClotheDto) {
    return await this.clothesModel.findByIdAndUpdate(id, updateClotheDto);
  }

  async remove(id: string) {
    return await this.clothesModel.findByIdAndDelete(id);
  }
}
