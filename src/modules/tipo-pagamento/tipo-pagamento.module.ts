import { Module } from '@nestjs/common';
import { TipoPagamentoService } from './tipo-pagamento.service';
import { TipoPagamentoController } from './tipo-pagamento.controller';

@Module({
  providers: [TipoPagamentoService],
  controllers: [TipoPagamentoController]
})
export class TipoPagamentoModule {}
