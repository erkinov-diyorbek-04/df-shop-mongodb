import { Module } from '@nestjs/common';
import { ClothesService } from './clothes.service';
import { ClothesController } from './clothes.controller';
import { Clothes, ClothesSchema } from './clothes.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Clothes.name, schema: ClothesSchema }]),
  ],
  controllers: [ClothesController],
  providers: [ClothesService],
})
export class ClothesModule {}
