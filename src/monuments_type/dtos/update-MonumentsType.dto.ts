import { IsString, IsOptional } from "class-validator";

export class UpdateMonumentsTypeDto {
    @IsString()
    @IsOptional()
    name_ar: string;

    @IsString()
    @IsOptional()
    name_en: string;
}