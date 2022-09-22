import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { check } from 'prettier';
import { Public } from 'src/common/decorators/public.decorator';
import { CartService } from './cart.service';
import { AddToNewCartDto, DeleteCartItemDto, UpdateCartDto } from './dto/cart.dto';
import { checkoutDto } from './dto/checkout.dto';
@ApiTags('Cart')
@ApiBearerAuth('access-token')
@Controller('cart')
export class CartController {
    constructor(private readonly cartService: CartService){}
    @Public()
    @Post('')
    @ApiOperation({ summary: 'Add product when no cart exist' })
    addToCart(@Body() addToNewCartDto:AddToNewCartDto)
    {
        return this.cartService.addToCart(addToNewCartDto);
    }

    @Public()
    @Get('porducts/:cartId')
    getCartProducts(@Param('cartId') cartId:string)
    {
        return this.cartService.getCartProducts(cartId);
    }

    @Public()
    @Delete('item')
    deleteCartItem(@Body() deleteCartItemDto:DeleteCartItemDto)
    {
        return this.cartService.deleteCartItem(deleteCartItemDto);
    }

    @Public()
    @Put(':cartId')
    @ApiOperation({ summary: 'Update or add product in  existing cart' })
    updateCart(@Param('cartId') cartId:string, @Body() updateCartDto:UpdateCartDto)
    {
        return this.cartService.updateCart(cartId, updateCartDto);
    }

    @Public()
    @Post('checkout')
    @ApiOperation({ summary: 'checkout' })
    checkout(@Body() checkoutDto:checkoutDto)
    {
        return this.cartService.checkout(checkoutDto);
    }
}
