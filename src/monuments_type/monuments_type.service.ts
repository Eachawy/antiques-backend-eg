import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { MonumentsType } from './monuments_type.entity';

@Injectable()
export class MonumentsTypeService {

    constructor(@InjectRepository(MonumentsType) private _repo: Repository<MonumentsType>) {

    }

    create(
        name_ar: string,
        name_en: string
    ) {
        const MonumentsType = this._repo.create({
            name_ar,
            name_en
        });

        return this._repo.save(MonumentsType);
    }

    findOne(id: number) {
        return this._repo.findOneBy({ id });
    }

    find(name_ar: string) {
        return this._repo.findBy({ name_ar: name_ar });
    }

    async update(id: number, attrs: Partial<MonumentsType>) {
        const MonumentsType = await this._repo.findOneBy({ id });
        if (!MonumentsType) {
            throw new NotFoundException("Monuments Type not found");
        }
        Object.assign(MonumentsType, attrs);
        this._repo.save(MonumentsType);
    }

    async remove(id: number) {
        const MonumentsType = await this._repo.findOneBy({ id });
        if (!MonumentsType) {
            throw new NotFoundException(`This Monuments Type not found`);
        }
        return this._repo.remove(MonumentsType);
    }
}
