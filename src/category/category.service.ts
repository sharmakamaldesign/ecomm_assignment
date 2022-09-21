import { HttpException, Inject, Injectable } from '@nestjs/common';
import { CATEGORY_REPOSITORY, SUB_CATEGORY_REPOSITORY } from 'src/common/constants';
import { CreateCategoryDto } from './dto/category.dto';
import { CreateSubCategoryDto } from './dto/subcategory.dto';
import { Category } from './entity/category.entity';
import { SubCategory } from './entity/subcategory.entity';

@Injectable()
export class CategoryService {
    constructor(
        @Inject(CATEGORY_REPOSITORY) private categoryRepository: typeof Category,
        @Inject(SUB_CATEGORY_REPOSITORY) private subCategoryRepository: typeof SubCategory,

        ){}

    async createCategory(createCategoryDto:CreateCategoryDto)
    {
        let existingCategory = await this.categoryRepository.findOne({where:{code:createCategoryDto.code}});
        if(existingCategory)
        {
            throw new HttpException("category with code "+existingCategory.code+" is already exist",409);
        }
     let res = await this.categoryRepository.create({...createCategoryDto});
     return res;
    }

    async getAllCategories()
    {
        
     let res = await this.categoryRepository.findAll();
     return res;
    }

    async createSubCategory(createSubCategoryDto:CreateSubCategoryDto)
    {
        let existingSubCategory = await this.subCategoryRepository.findOne({where:{code:createSubCategoryDto.code}});
        if(existingSubCategory)
        {
            throw new HttpException("sub-category with code "+existingSubCategory.code+" is already exist",409);
        }
     let res = await this.subCategoryRepository.create({...createSubCategoryDto});
     return res;
    }

    async getSubCategoriesByCategory(categoryId:string)
    {
        
        if(!categoryId)
        {
            throw new HttpException("categoryId is mendatory",400);
        }
     let res = await this.subCategoryRepository.findAll({where:{category_id:categoryId}});
     return res;
    }

    
    async getAllSubCategories()
    {
     let res = await this.subCategoryRepository.findAll();
     return res;
    }
}
