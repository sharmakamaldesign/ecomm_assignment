import { CART_PRODUCTS_REPOSITORY, CART_REPOSITORY, PRODUCT_REPOSITORY } from "src/common/constants";
import { Cart } from "./entity/cart.entity";
import { CartProducts } from "./entity/cart_products.entity";

export const cartProviders = [
    {provide: CART_REPOSITORY, useValue: Cart},
    {provide: CART_PRODUCTS_REPOSITORY, useValue: CartProducts},

    
];
export const cartModels = [
    Cart, CartProducts
]