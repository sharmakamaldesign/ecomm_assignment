import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";
import { BOOLEAN, INET, INTEGER, NUMBER } from "sequelize";
export class CreateProductDto{
    @ApiProperty({
        type: String,
        required: true,
        description:'name'
    })
    @IsString()
    name: string;

    @ApiProperty({
        type: String,
        required: true,
        description:'code'
    })
    @IsString()
    code: string;


    @ApiProperty({
        type: String,
        required: true,
        description:'description'
    })
    @IsString()
    description: string;


    @ApiProperty({
        type: String,
        required: true,
        description:'image'
    })
    @IsString()
    image: string;

    @ApiProperty({
        type: String,
        required: true,
        description:'sub_category_id'
    })
    @IsString()
    sub_category_id: string;

    @ApiProperty({
        required: true,
        description:'price'
    })
    @IsString()
    price: number;

    @ApiProperty({
        required: true,
        description:'stock'
    })
    @IsString()
    stock: number;

    @ApiProperty({
        type: BOOLEAN,
        required: true,
        description:'available',
        default:true
    })
    @IsString()
    available: boolean;
}