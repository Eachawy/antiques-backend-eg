import { Expose } from "class-transformer";

export class EraDto {
    @Expose()
    name_ar: string;

    @Expose()
    name_en: string;

    @Expose()
    from: string;

    @Expose()
    to: string;
}