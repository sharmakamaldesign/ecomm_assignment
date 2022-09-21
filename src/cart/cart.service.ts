import { HttpException, Inject, Injectable } from '@nestjs/common';
import { CART_PRODUCTS_REPOSITORY, CART_REPOSITORY } from 'src/common/constants';
import { AddToCartDto } from './dto/cart.dto';
import { Cart } from './entity/cart.entity';
import { CartProducts } from './entity/cart_products.entity';

@Injectable()
export class CartService {
    constructor(
        @Inject(CART_REPOSITORY) private cartRepository: typeof Cart,
        @Inject(CART_PRODUCTS_REPOSITORY) private cartProductsRepository: typeof CartProducts,

        ){}

    async addToCart(addToCartDto:AddToCartDto)
    {
        let cartId = addToCartDto.cart_id;
        if(cartId)
        {
            let existingRecord = await this.cartProductsRepository.findOne({where:{cart_id:cartId,product_id:addToCartDto.product_id}});
                if(existingRecord)
            {
                throw new HttpException("This product already exist",409);
            }
        }

        else// create new cart
        {
            let cart = await this.cartRepository.create({})
            cartId = cart.id;
        }
        let cartProducts = {
            product_id:addToCartDto.product_id,
            quantity:addToCartDto.quantity,
            cart_id: cartId
        }
        let response = await this.cartProductsRepository.create(cartProducts);
        return response
    }
}
