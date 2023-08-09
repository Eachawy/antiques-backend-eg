import { Expose } from "class-transformer";

export class MonumentsTypeDto {
    @Expose()
    name_ar: string;

    @Expose()
    name_en: string;
}