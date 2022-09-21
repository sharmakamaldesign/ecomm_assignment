import { PRODUCT_REPOSITORY } from "src/common/constants";
import { Product } from "./entity/product.entity";

export const productProviders = [
    {provide: PRODUCT_REPOSITORY, useValue: Product},
    
];
export const productModels = [
    Product
]