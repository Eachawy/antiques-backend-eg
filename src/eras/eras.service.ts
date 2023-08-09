import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Eras } from './eras.entity';

@Injectable()
export class ErasService {

    constructor(@InjectRepository(Eras) private _repo: Repository<Eras>) {

    }

    create(
        name_ar: string,
        name_en: string,
        from: string,
        to: string
    ) {
        const era = this._repo.create({
            name_ar,
            name_en,
            from,
            to
        });

        return this._repo.save(era);
    }

    findOne(id: number) {
        return this._repo.findOneBy({ id });
    }

    find(name_ar: string) {
        return this._repo.findBy({ name_ar: name_ar });
    }

    async update(id: number, attrs: Partial<Eras>) {
        const era = await this._repo.findOneBy({ id });
        if (!era) {
            throw new NotFoundException("Era not found");
        }
        Object.assign(era, attrs);
        this._repo.save(era);
    }

    async remove(id: number) {
        const era = await this._repo.findOneBy({ id });
        if (!era) {
            throw new NotFoundException(`This Era not found`);
        }
        return this._repo.remove(era);
    }
}
