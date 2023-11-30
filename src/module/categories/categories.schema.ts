import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Clothes } from 'module/clothes/clothes.schema';
import { HydratedDocument, Types } from 'mongoose';

export type CategoriesDocument = HydratedDocument<Categories>;

@Schema()
export class Categories {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  image: string;

  @Prop({ required: true, type: [{ type: Types.ObjectId, ref: 'Clothes' }] })
  clothes: Clothes[];
}

export const CategoriesSchema = SchemaFactory.createForClass(Categories);
