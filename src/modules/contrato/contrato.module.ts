import { Module } from '@nestjs/common';
import { ContratoService } from './contrato.service';
import { ContratoController } from './contrato.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContratoRepository } from './contrato.repositoty';

@Module({
  imports: [TypeOrmModule.forFeature([ContratoRepository])],
  providers: [ContratoService],
  controllers: [ContratoController]
})
export class ContratoModule { }
