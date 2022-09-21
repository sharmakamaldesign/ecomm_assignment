import { Body, Controller, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Public } from 'src/common/decorators/public.decorator';
import { CartService } from './cart.service';
import { AddToCartDto } from './dto/cart.dto';
@ApiTags('Cart')
@ApiBearerAuth('access-token')
@Controller('cart')
export class CartController {
    constructor(private readonly cartService: CartService){}
    @Public()
    @Post('')
    addToCart(@Body() addToCartDto:AddToCartDto)
    {
        return this.cartService.addToCart(addToCartDto);
    }
}
