import { Table, Column, Model, DataType, AllowNull, ForeignKey, IsUUID, BelongsTo } from 'sequelize-typescript';
import { SubCategory } from 'src/category/entity/subcategory.entity';
import { defaultTableConfig } from 'src/common/database/database.config';
import { BaseEntity } from 'src/common/entity/base.entity';

@Table({
    tableName: 'info',
    schema: 'product',
    ...defaultTableConfig
})
export class Product extends BaseEntity {
    @AllowNull(false)
    @Column({
        type: DataType.STRING
    })
    name: string;

    @AllowNull(false)
    @Column({
        type: DataType.STRING,
        unique: true,
    })
    code: string;


    @AllowNull(true)
    @Column({
        type: DataType.STRING
    })
    description: string;

    @AllowNull(true)
    @Column({
        type: DataType.STRING
    })
    image: string;

    @AllowNull(false)
    @Column({
        type: DataType.BOOLEAN,
        defaultValue:true,
    })
    avaialble: boolean;

    @AllowNull(false)
    @Column({
        type: DataType.INTEGER
    })
    stock: number;

    @AllowNull(false)
    @Column({
        type: DataType.FLOAT
    })
    price: number;

    @ForeignKey(()=> SubCategory)
    @IsUUID(4)
    @AllowNull(false)
    @Column({ type: DataType.UUID })
    sub_category_id: string;

    @BelongsTo(()=> SubCategory)
    sub_category: SubCategory
}