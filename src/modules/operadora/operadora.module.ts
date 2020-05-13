import { Module } from '@nestjs/common';
import { OperadoraService } from './operadora.service';
import { OperadoraController } from './operadora.controller';

@Module({
  providers: [OperadoraService],
  controllers: [OperadoraController]
})
export class OperadoraModule {}
