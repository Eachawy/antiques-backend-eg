import { Body, Controller, Post, Get, Param, Patch, Query, Delete, NotFoundException, UseInterceptors } from '@nestjs/common';
import { CreateMonumentsTypeDto } from './dtos/create-MonumentsType.dto';
import { UpdateMonumentsTypeDto } from './dtos/update-MonumentsType.dto';
import { MonumentsTypeService } from './monuments_type.service';
import { Serialze } from '../interceptors/serializeinterceptor';
import { MonumentsTypeDto } from './dtos/MonumentsType.dto';

@Controller('monumentsType')
@Serialze(MonumentsTypeDto)
export class MonumentsTypeController {
    constructor(private monumentsTypeService: MonumentsTypeService) { }

    @Post('/newMonumentsType')
    CreateEra(@Body() body: CreateMonumentsTypeDto) {
        console.log(body);
        this.monumentsTypeService.create(
            body.name_ar,
            body.name_en
        );
    }

    // you can add Serialze with especially DTO  @Serialze(MonumentsType)
    @Get('/:id')
    async findEra(@Param('id') id: string) {
        const MonumentsType = await this.monumentsTypeService.findOne(parseInt(id));
        if (!MonumentsType) {
            throw new NotFoundException(`id: ${id} is not found`);
        }
        return MonumentsType;
    }

    @Get()
    async findAllEras(@Query('name_ar') name: string) {
        const MonumentsType = await this.monumentsTypeService.find(name);
        if (!MonumentsType) {
            throw new NotFoundException(`id: ${name} is not found`);
        }
        return MonumentsType;
    }

    @Delete('/:id')
    removeEra(@Param('id') id: string) {
        return this.monumentsTypeService.remove(parseInt(id));
    }

    @Patch('/:id')
    updateEra(@Param('id') id: string, @Body() body: UpdateMonumentsTypeDto) {
        console.log(body);
        return this.monumentsTypeService.update(parseInt(id), body);
    }
}
