import { IsString } from "class-validator";

export class CreateMonumentsTypeDto {
    @IsString()
    name_ar: string;

    @IsString()
    name_en: string;
}