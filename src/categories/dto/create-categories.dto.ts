import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class Categories {
    @ApiProperty({ example: "elektronics", description: "category nomi" })
    @IsNotEmpty()
    @IsString()
    readonly category_name: string;
}