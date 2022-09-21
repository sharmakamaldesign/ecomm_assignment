import { CATEGORY_REPOSITORY, SUB_CATEGORY_REPOSITORY } from "src/common/constants";
import { Category } from "./entity/category.entity";
import { SubCategory } from "./entity/subcategory.entity";

export const categoryProviders = [
    {provide: CATEGORY_REPOSITORY, useValue: Category},
    {provide: SUB_CATEGORY_REPOSITORY, useValue: SubCategory},
    
];
export const categoryModels = [
    Category, SubCategory
]