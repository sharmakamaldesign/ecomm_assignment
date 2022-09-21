import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductController } from './product/product.controller';
import { ProductService } from './product/product.service';
import { CategoryController } from './category/category.controller';
import { CategoryService } from './category/category.service';
import { SubCategoryController } from './sub_category/sub_category.controller';
import { SubCategoryService } from './sub_category/sub_category.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './common/database/database.module';
import { CategoryModule } from './category/category.module';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { InterceptorsService } from './common/services/interceptors/interceptors.service';
import { ProductModule } from './product/product.module';
import { CartModule } from './cart/cart.module';

@Module({
  imports: [CategoryModule, ConfigModule.forRoot({isGlobal:true}),DatabaseModule, ProductModule, CartModule],
  controllers: [AppController],
  providers: [AppService,{
    provide: APP_INTERCEPTOR,
    useClass: InterceptorsService,
  },
  // {
  //   provide: APP_GUARD,
  //   useClass: JwtAuthGuard,
  // },
],
})
export class AppModule {}
