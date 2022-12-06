import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CategoriesDto {
    @ApiProperty({ example: "elektronics", description: "category nomi" })
    @IsNotEmpty({message:"category name bo'sh bo'lmasligi kerak"})
    @IsString({message:"category name string bo'lishi kerak"})
    readonly category_name: string;
}