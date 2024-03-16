import { Expose } from "class-transformer";

export class DynastyDto {
    @Expose()
    name_ar: string;

    @Expose()
    name_en: string;

    @Expose()
    from: string;

    @Expose()
    to: string;

    @Expose()
    era_id: number;

    // @Expose()
    // era_id: number;
}