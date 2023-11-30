import { Module } from '@nestjs/common';
import { CategoriesModule, ClothesModule } from '@module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ClothesModule,
    MongooseModule.forRoot(
      'mongodb+srv://df-shop-db:df-shop-db@cluster0.tqkckgd.mongodb.net/?retryWrites=true&w=majority',
    ),
    CategoriesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
