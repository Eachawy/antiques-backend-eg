import {
    AfterInsert,
    AfterUpdate,
    AfterRemove,
    Entity,
    Column,
    PrimaryGeneratedColumn
} from "typeorm";

@Entity()
export class Dynasty {
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

    @Column()
    era_id: number;

    @AfterInsert()
    logInsert() {
        console.log(`insert dynesty ${this.id}`);
    }

    @AfterUpdate()
    logUpdate() {
        console.log(`update dynesty ${this.id}`);
    }

    @AfterRemove()
    logRemove() {
        console.log(`remove dynesty ${this.id}`);
    }
}