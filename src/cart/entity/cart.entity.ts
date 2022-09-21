import { Table, Column, Model, DataType, AllowNull, ForeignKey, IsUUID, BelongsTo } from 'sequelize-typescript';
import { SubCategory } from 'src/category/entity/subcategory.entity';
import { defaultTableConfig } from 'src/common/database/database.config';
import { BaseEntity } from 'src/common/entity/base.entity';

@Table({
    tableName: 'info',
    schema: 'cart',
    ...defaultTableConfig
})
export class Cart extends BaseEntity {

    @AllowNull(true)
    @Column({
        type: DataType.STRING
    })
    description: string;

    @AllowNull(false)
    @Column({
        type: DataType.BOOLEAN,
        defaultValue:false,
    })
    ordered: boolean;

    // @ForeignKey(()=> SubCategory)
    // @IsUUID(4)
    // @AllowNull(true)
    // @Column({ type: DataType.UUID })
    // user_id: string;

    // @BelongsTo(()=> SubCategory)
    // sub_category: SubCategory
}