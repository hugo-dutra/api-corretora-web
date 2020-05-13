import { Module } from '@nestjs/common';
import { ClasseContratoService } from './classe-contrato.service';
import { ClasseContratoController } from './classe-contrato.controller';

@Module({
  providers: [ClasseContratoService],
  controllers: [ClasseContratoController]
})
export class ClasseContratoModule {}
