import { Module } from '@nestjs/common';
import { CartController } from './cart.controller';
import { cartProviders } from './cart.provider';
import { CartService } from './cart.service';

@Module({
  controllers: [CartController],
  providers: [CartService, ...cartProviders],
  exports:[CartService]
})
export class CartModule {}
