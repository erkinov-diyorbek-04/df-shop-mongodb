import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ClothesDocument = HydratedDocument<Clothes>;

@Schema()
export class Clothes {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  image: string;

  @Prop({ required: true })
  category_id: string;
}

export const ClothesSchema = SchemaFactory.createForClass(Clothes);
