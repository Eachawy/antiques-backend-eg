import { IsString } from "class-validator";

export class CreateEraDto {
    @IsString()
    name_ar: string;

    @IsString()
    name_en: string;

    @IsString()
    from: string;

    @IsString()
    to: string;
}