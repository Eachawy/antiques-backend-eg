import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ErasController } from './eras.controller';
import { ErasService } from './eras.service';
import { Eras } from './eras.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Eras])],
    controllers: [ErasController],
    providers: [ErasService]
})
export class ErasModule { }
