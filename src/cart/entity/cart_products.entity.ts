import { Table, Column, Model, DataType, AllowNull, ForeignKey, IsUUID, BelongsTo } from 'sequelize-typescript';
import { SubCategory } from 'src/category/entity/subcategory.entity';
import { defaultTableConfig } from 'src/common/database/database.config';
import { BaseEntity } from 'src/common/entity/base.entity';
import { Product } from 'src/product/entity/product.entity';
import { Cart } from './cart.entity';

@Table({
    tableName: 'cart_products',
    schema: 'cart',
    ...defaultTableConfig
})
export class CartProducts extends BaseEntity {
    @ForeignKey(()=> Cart)
    @IsUUID(4)
    @AllowNull(false)
    @Column({ type: DataType.UUID })
    cart_id: string;

    @BelongsTo(()=> Cart)
    cart: Cart


    @ForeignKey(()=> Product)
    @IsUUID(4)
    @AllowNull(false)
    @Column({ type: DataType.UUID })
    product_id: string;

    @BelongsTo(()=> Product)
    product: Product

    @AllowNull(false)
    @Column({
        type: DataType.INTEGER
    })
    quantity: number;
}