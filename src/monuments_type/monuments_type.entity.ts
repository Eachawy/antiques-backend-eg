import { AfterInsert, AfterUpdate, AfterRemove, Entity, Column, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class MonumentsType {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name_ar: string;

    @Column()
    name_en: string;

    @AfterInsert()
    logInsert() {
        console.log(`insert MonumentsType ${this.id}`);
    }

    @AfterUpdate()
    logUpdate() {
        console.log(`update MonumentsType ${this.id}`);
    }

    @AfterRemove()
    logRemove() {
        console.log(`remove MonumentsType ${this.id}`);
    }
}