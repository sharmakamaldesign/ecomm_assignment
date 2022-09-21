import { Table, Column, Model, DataType, AllowNull } from 'sequelize-typescript';
import { defaultTableConfig } from 'src/common/database/database.config';
import { BaseEntity } from 'src/common/entity/base.entity';

@Table({
    tableName: 'info',
    schema: 'category',
    ...defaultTableConfig
})
export class Category extends BaseEntity {
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


}