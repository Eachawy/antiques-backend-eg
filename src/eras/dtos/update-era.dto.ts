import { IsString, IsOptional } from "class-validator";

export class UpdateEraDto {
    @IsString()
    @IsOptional()
    name_ar: string;

    @IsString()
    @IsOptional()
    name_en: string;

    @IsString()
    @IsOptional()
    from: string;

    @IsString()
    @IsOptional()
    to: string;
}