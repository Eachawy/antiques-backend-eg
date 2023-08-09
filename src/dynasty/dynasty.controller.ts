import { Body, Controller, Post, Get, Param, Patch, Query, Delete, NotFoundException, UseInterceptors } from '@nestjs/common';
import { CreateDynastyDto } from './dtos/create-dynasty.dto';
import { UpdatedynastyDto } from './dtos/update-dynasty.dto';
import { DynastyService } from './dynasty.service';
import { Serialze } from '../interceptors/serializeinterceptor';
import { DynastyDto } from './dtos/dynasty.dto';

@Controller('dynasty')
@Serialze(DynastyDto)
export class DynastyController {
    constructor(private dynastyService: DynastyService) { }

    @Post('/newDynasty')
    CreateDynasty(@Body() body: CreateDynastyDto) {
        console.log(body);
        this.dynastyService.create(
            body.name_ar,
            body.name_en,
            body.from,
            body.to,
            body.era_id
        );
    }

    // you can add Serialze with especially DTO  @Serialze(DynastyDto)
    @Get('/:id')
    async findDynasty(@Param('id') id: string) {
        const Dynasty = await this.dynastyService.findOne(parseInt(id));
        if (!Dynasty) {
            throw new NotFoundException(`id: ${id} is not found`);
        }
        return Dynasty;
    }

    @Get()
    async findAllDynasty(@Query('name_en') name: string) {
        const Dynasty = await this.dynastyService.find(name);
        if (!Dynasty) {
            throw new NotFoundException(`id: ${name} is not found`);
        }
        return Dynasty;
    }

    @Delete('/:id')
    removeDynasty(@Param('id') id: string) {
        return this.dynastyService.remove(parseInt(id));
    }

    @Patch('/:id')
    updateDynasty(@Param('id') id: string, @Body() body: UpdatedynastyDto) {
        console.log(body);
        return this.dynastyService.update(parseInt(id), body);
    }

}
