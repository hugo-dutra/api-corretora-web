import { Module } from '@nestjs/common';
import { ParcelaContratoService } from './parcela-contrato.service';
import { ParcelaContratoController } from './parcela-contrato.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParcelaContratoRepository } from './parcela-contrato.repositoty';

@Module({
  imports: [TypeOrmModule.forFeature([ParcelaContratoRepository])],
  providers: [ParcelaContratoService],
  controllers: [ParcelaContratoController]
})
export class ParcelaContratoModule { }
