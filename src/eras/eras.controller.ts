import { Body, Controller, Post, Get, Param, Patch, Query, Delete, NotFoundException, UseInterceptors } from '@nestjs/common';
import { CreateEraDto } from './dtos/create-era.dto';
import { UpdateEraDto } from './dtos/update-era.dto';
import { ErasService } from './eras.service';
import { Serialze } from '../interceptors/serializeinterceptor';
import { EraDto } from './dtos/era.dto';

@Controller('eras')
@Serialze(EraDto)
export class ErasController {

    constructor(private erasService: ErasService) { }

    @Post('/newEra')
    CreateEra(@Body() body: CreateEraDto) {
        console.log(body);
        this.erasService.create(
            body.name_ar,
            body.name_en,
            body.from,
            body.to
        );
    }

    // you can add Serialze with especially DTO  @Serialze(EraDto)
    @Get('/:id')
    async findEra(@Param('id') id: string) {
        const Era = await this.erasService.findOne(parseInt(id));
        if (!Era) {
            throw new NotFoundException(`id: ${id} is not found`);
        }
        return Era;
    }

    @Get()
    async findAllEras(@Query('name_ar') name: string) {
        const Era = await this.erasService.find(name);
        if (!Era) {
            throw new NotFoundException(`id: ${name} is not found`);
        }
        return Era;
    }

    @Delete('/:id')
    removeEra(@Param('id') id: string) {
        return this.erasService.remove(parseInt(id));
    }

    @Patch('/:id')
    updateEra(@Param('id') id: string, @Body() body: UpdateEraDto) {
        console.log(body);
        return this.erasService.update(parseInt(id), body);
    }

}
