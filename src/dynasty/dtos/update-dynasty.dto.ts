import { IsString, IsInt, IsOptional } from "class-validator";

export class UpdatedynastyDto {
    @IsString()
    @IsOptional()
    name_ar: string;

    @IsString()
    @IsOptional()
    name_en: string;

    @IsString()
    @IsOptional()
    dynasty_from: string;

    @IsString()
    @IsOptional()
    dynasty_to: string;

    @IsInt()
    @IsOptional()
    era_id: number;
}