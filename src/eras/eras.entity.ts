import { AfterInsert, AfterUpdate, AfterRemove, Entity, Column, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Eras {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name_ar: string;

    @Column()
    name_en: string;

    @Column()
    from: string;

    @Column()
    to: string;

    @AfterInsert()
    logInsert() {
        console.log(`insert era ${this.id}`);
    }

    @AfterUpdate()
    logUpdate() {
        console.log(`update era ${this.id}`);
    }

    @AfterRemove()
    logRemove() {
        console.log(`remove era ${this.id}`);
    }
}