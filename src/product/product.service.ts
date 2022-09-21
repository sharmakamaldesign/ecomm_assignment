import { HttpException, Inject, Injectable } from '@nestjs/common';
import { PRODUCT_REPOSITORY } from 'src/common/constants';
import { CreateProductDto } from './dto/product.dto';
import { Product } from './entity/product.entity';

@Injectable()
export class ProductService {


    constructor(
        @Inject(PRODUCT_REPOSITORY) private productRepository: typeof Product,

        ){}
    async createProduct(createProductDto:CreateProductDto)
    {
        
        let existingProduct = await this.productRepository.findOne({where:{code:createProductDto.code}});
        if(existingProduct)
        {
            throw new HttpException("product with code "+existingProduct.code+" is already exist",409);
        }
     let res = await this.productRepository.create({...createProductDto});
     return res;
    }

    async getProductsBySubCategory(subCategoryId:string)
    {
        
        if(!subCategoryId)
        {
            throw new HttpException("subCategoryId is mendatory",400);
        }
     let res = await this.productRepository.findAll({where:{sub_category_id:subCategoryId}});
     return res;
    }
    
    async getProductById(productId:string)
    { 
        if(!productId)
        {
            throw new HttpException("productId is mendatory",400);
        }
     let res = await this.productRepository.findOne({where:{id:productId}});
     if(!res)
     {
         throw new HttpException("product not available",404);
     }
     return res;
    }

    async getProductByCode(productCode:string)
    { 
        if(!productCode)
        {
            throw new HttpException("code is mendatory",400);
        }
     let res = await this.productRepository.findOne({where:{code:productCode}});
     if(!res)
     {
         throw new HttpException("product not available",404);
     }
     return res;
    }

    async getProducts()
    {
     let res = await this.productRepository.findAll();
     return res;
    }
}
