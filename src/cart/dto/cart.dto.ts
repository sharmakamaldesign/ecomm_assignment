import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";
import { BOOLEAN, INET, INTEGER, NUMBER } from "sequelize";

export class AddToNewCartDto{
    @ApiProperty({
        type: String,
        required: true,
        description:'product_id'
    })
    @IsString()
    product_id: string;

    @ApiProperty({
        required: true,
        description:'quantity'
    })
    @IsString()
    quantity: number;
}


export class UpdateCartDto{
    @ApiProperty({
        type: String,
        required: true,
        description:'product_id'
    })
    @IsString()
    product_id: string;

    @ApiProperty({
        required: true,
        description:'quantity'
    })
    @IsString()
    quantity: number;
}


export class DeleteCartItemDto{
    @ApiProperty({
        type: String,
        required: false,
        description:'cart_id'
    })
    @IsString()
    cart_id: string;

    @ApiProperty({
        type: String,
        required: true,
        description:'product_id'
    })
    @IsString()
    product_id: string;
}