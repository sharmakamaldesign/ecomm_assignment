import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";
export class CreateCategoryDto{
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
}