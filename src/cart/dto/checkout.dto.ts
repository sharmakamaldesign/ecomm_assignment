import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";
import { BOOLEAN, INET, INTEGER, NUMBER } from "sequelize";
export class checkoutDto{
    @ApiProperty({
        type: String,
        required: true,
        description:'product_id'
    })
    @IsString()
    cart_id: string;

    
}