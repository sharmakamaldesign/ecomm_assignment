import { HttpException, Inject, Injectable } from '@nestjs/common';
import { CART_PRODUCTS_REPOSITORY, CART_REPOSITORY } from 'src/common/constants';
import {  AddToNewCartDto, DeleteCartItemDto, UpdateCartDto } from './dto/cart.dto';
import { checkoutDto } from './dto/checkout.dto';
import { Cart } from './entity/cart.entity';
import { CartProducts } from './entity/cart_products.entity';

@Injectable()
export class CartService {
    constructor(
        @Inject(CART_REPOSITORY) private cartRepository: typeof Cart,
        @Inject(CART_PRODUCTS_REPOSITORY) private cartProductsRepository: typeof CartProducts,

        ){}

    async addToCart(addToNewCartDto:AddToNewCartDto)
    {
        
        let cart = await this.cartRepository.create({})
        let cartProducts = {
            product_id:addToNewCartDto.product_id,
            quantity:addToNewCartDto.quantity,
            cart_id: cart.id
        }
        let response = await this.cartProductsRepository.create(cartProducts);
        return response
    }

    async deleteCartItem(deleteCartItemDto:DeleteCartItemDto)
    {

        let res = await this.cartProductsRepository.destroy({where:{product_id:deleteCartItemDto.product_id, cart_id:deleteCartItemDto.cart_id}});
        return res;
    }

    async getCartProducts(cartId:string){
        if(!cartId)
        {
            throw new HttpException('cartId is mendatory',409);
        }

        let existingCart = await this.cartRepository.findOne({where:{id:cartId}});
        if(!existingCart)
        {
            throw new HttpException("Cart not exist with id: "+cartId,409);
        }
        let res =  await this.cartProductsRepository.findAll({where:{cart_id:cartId}});
        return res

    }

    async updateCart(cartId:string, updateCartDto:UpdateCartDto)
    {
        let existingCart = await this.cartRepository.findOne({where:{id:cartId}});
        if(!existingCart)
        {
            throw new HttpException("Cart not exist",404);
        }
        
        let existingCartProduct = await this.cartProductsRepository.findOne({where:{cart_id:cartId, product_id:updateCartDto.product_id}});
        if(existingCartProduct)
        {
            let cartProductUpdatedObject = {
                quantity:updateCartDto.quantity,
            } 
            let response = await this.cartProductsRepository.update({...cartProductUpdatedObject},{where:{cart_id:cartId, product_id:updateCartDto.product_id}});
            console.log("update cart response",response);
            if(response && response[0] == 1)
            {
                return {"message":"cart updated","cartId":cartId}
            }
            else
            {
                return {"message":"cart not updated","cartId":cartId}

            }
        }
        else
        {
            let cartProducts = {
                product_id:updateCartDto.product_id,
                quantity:updateCartDto.quantity,
                cart_id: cartId
            }
            let response = await this.cartProductsRepository.create(cartProducts);
            return response
        }
    }

    async checkout(checkoutDto:checkoutDto)
    {
        let existingCart = await this.cartRepository.findOne({where:{id:checkoutDto.cart_id}});
        if(!existingCart)
        {
            throw new HttpException("Cart not exist",404);
        }

        let response = await this.cartRepository.update({ordered:true},{where:{id:checkoutDto.cart_id}})
        if(response && response[0] == 1)
            {
                return {"message":"checkout successfully","cartId":checkoutDto.cart_id}
            }
            else
            {
                return {"message":"checkout failed","cartId":checkoutDto.cart_id}

            }
        
    }
}
