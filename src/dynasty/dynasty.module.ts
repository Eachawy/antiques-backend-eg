import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DynastyController } from './dynasty.controller';
import { DynastyService } from './dynasty.service';
import { Dynasty } from './dynasty.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Dynasty])],
  controllers: [DynastyController],
  providers: [DynastyService]
})
export class DynastyModule { }
