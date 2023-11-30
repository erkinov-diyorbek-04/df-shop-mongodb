import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoriesDto } from './create-category.dto';

export class UpdateCategoriesDto extends PartialType(CreateCategoriesDto) {}
