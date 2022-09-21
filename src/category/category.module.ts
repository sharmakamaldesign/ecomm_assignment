import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { categoryProviders } from './category.provider';
import { CategoryService } from './category.service';

@Module({
    providers:[CategoryService, ...categoryProviders],
    controllers:[CategoryController],
    exports:[CategoryService]
})
export class CategoryModule {}
