import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Dynasty } from './dynasty.entity';

@Injectable()
export class DynastyService {
    constructor(@InjectRepository(Dynasty) private _repo: Repository<Dynasty>) { }

    create(
        name_ar: string,
        name_en: string,
        from: string,
        to: string,
        era_id: number
    ) {
        const dynasty = this._repo.create({
            name_ar,
            name_en,
            from,
            to,
            era_id
        });

        console.log('===>' + JSON.stringify(dynasty));

        return this._repo.save(dynasty);
    }

    findOne(id: number) {
        return this._repo.findOneBy({ id });
    }

    find(name_en: string) {
        return this._repo.findBy({ name_en: name_en });
    }

    async update(id: number, attrs: Partial<Dynasty>) {
        const dynasty = await this._repo.findOneBy({ id });
        if (!dynasty) {
            throw new NotFoundException("Dynasty not found");
        }
        Object.assign(dynasty, attrs);
        this._repo.save(dynasty);
    }

    async remove(id: number) {
        const dynasty = await this._repo.findOneBy({ id });
        if (!dynasty) {
            throw new NotFoundException(`This Dynasty not found`);
        }
        return this._repo.remove(dynasty);
    }
}
