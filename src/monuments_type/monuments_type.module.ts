import { Module } from '@nestjs/common';
import { MonumentsTypeController } from './monuments_type.controller';
import { MonumentsTypeService } from './monuments_type.service';
import { MonumentsType } from './monuments_type.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MonumentsType])],
  controllers: [MonumentsTypeController],
  providers: [MonumentsTypeService]
})
export class MonumentsTypeModule { }
