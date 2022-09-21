import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { productProviders } from './product.provider';
import { ProductService } from './product.service';

@Module({
    providers:[ProductService, ...productProviders],
    controllers:[ProductController],
    exports:[ProductService]
})
export class ProductModule {}
