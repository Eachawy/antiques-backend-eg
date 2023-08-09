import { IsString, IsInt, IsNumber } from "class-validator";

export class CreateDynastyDto {
    @IsString()
    name_ar: string;

    @IsString()
    name_en: string;

    @IsString()
    from: string;

    @IsString()
    to: string;

    @IsInt()
    era_id: number;
}