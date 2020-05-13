import { Module } from '@nestjs/common';
import { TipoContratoService } from './tipo-contrato.service';
import { TipoContratoController } from './tipo-contrato.controller';

@Module({
  providers: [TipoContratoService],
  controllers: [TipoContratoController]
})
export class TipoContratoModule {}
