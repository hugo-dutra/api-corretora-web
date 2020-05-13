import { Module } from '@nestjs/common';
import { TipoContratoService } from './tipo-contrato.service';
import { TipoContratoController } from './tipo-contrato.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoContratoRepository } from './tipo-contrato.repositoty';

@Module({
  imports: [TypeOrmModule.forFeature([TipoContratoRepository])],
  providers: [TipoContratoService],
  controllers: [TipoContratoController]
})
export class TipoContratoModule { }
