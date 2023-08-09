import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ErasModule } from './eras/eras.module';
import { ConfigModule } from '@nestjs/config';

import { Eras } from './eras/eras.entity';
import { DynastyModule } from './dynasty/dynasty.module';
import { MonumentsTypeModule } from './monuments_type/monuments_type.module';
import { Dynasty } from './dynasty/dynasty.entity';
import { MonumentsType } from './monuments_type/monuments_type.entity';

@Module({
  imports: [
    // ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: 'Antiq',
      entities: [Eras, Dynasty, MonumentsType],
      synchronize: true,
      username: 'postgres',
      password: 'E198373',
      host: 'localhost',
      port: 5432
    }),
    ErasModule,
    DynastyModule,
    MonumentsTypeModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }



// user: "postgres",
// password: "E198373",
// host: "localhost",
// port: 5432,
// database: "EG_Antiq"
