import { Table, Column, Model, DataType, AllowNull, ForeignKey, IsUUID, BelongsTo } from 'sequelize-typescript';
import { defaultTableConfig } from 'src/common/database/database.config';
import { BaseEntity } from 'src/common/entity/base.entity';
import { Category } from './category.entity';

@Table({
    tableName: 'sub_category',
    schema: 'category',
    ...defaultTableConfig
})
export class SubCategory extends BaseEntity {
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

    @ForeignKey(()=> Category)
    @IsUUID(4)
    @AllowNull(false)
    @Column({ type: DataType.UUID })
    category_id: string;

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

    @BelongsTo(()=> Category)
    category: Category


}