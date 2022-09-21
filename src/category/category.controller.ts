import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Public } from 'src/common/decorators/public.decorator';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/category.dto';
import { CreateSubCategoryDto } from './dto/subcategory.dto';
@ApiTags('Category')
@ApiBearerAuth('access-token')
@Controller('category')

export class CategoryController {
    constructor(private readonly categoryService: CategoryService,
        ){}

    @Public()
    @Post('')
    createCategory(@Body() createCategoryDto:CreateCategoryDto)
    {
        return this.categoryService.createCategory(createCategoryDto);
    }

    @Public()
    @Post('sub-category')
    createSubCategory(@Body() createSubCategoryDto:CreateSubCategoryDto)
    {
        return this.categoryService.createSubCategory(createSubCategoryDto);
    }

    @Public()
    @Get('')
    getAllCategories()
    {
        return this.categoryService.getAllCategories();
    }

    
    @Public()
    @Get('sub-categories/:categoryId')
    getSubCategoriesByCategory(@Param('categoryId') categoryId: string)
    {
        return this.categoryService.getSubCategoriesByCategory(categoryId);
    }

    @Public()
    @Get('sub-categories')
    getAllSubCategories()
    {
        return this.categoryService.getAllSubCategories();
    }
}


