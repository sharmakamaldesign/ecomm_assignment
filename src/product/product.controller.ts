import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Public } from 'src/common/decorators/public.decorator';
import { CreateProductDto } from './dto/product.dto';
import { ProductService } from './product.service';
@ApiTags('Product')
@ApiBearerAuth('access-token')
@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService,
        ){}

    @Public()
    @Post('')
    createProduct(@Body() createProductDto:CreateProductDto)
    {
        return this.productService.createProduct(createProductDto);
    }
    @Public()
    @Get('')
    getProducts()
    {
        return this.productService.getProducts();
    }

    @Public()
    @Get('sub-category/:subCategoryId')
    getProductsBySubCategory(@Param('subCategoryId') subCategoryId:string)
    {
        return this.productService.getProductsBySubCategory(subCategoryId);
    }
    @Public()
    @Get(':id')
    getProductById(@Param('id') productId:string)
    {
        return this.productService.getProductById(productId);
    }
    
    @Public()
    @Get('code/:id')
    getProductByCode(@Param('id') code:string)
    {
        return this.productService.getProductByCode(code);
    }

}
