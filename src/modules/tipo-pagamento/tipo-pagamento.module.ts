import { TipoPagamentoRepository } from './tipo-pagamento.repository';
import { Module } from '@nestjs/common';
import { TipoPagamentoService } from './tipo-pagamento.service';
import { TipoPagamentoController } from './tipo-pagamento.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TipoPagamentoRepository])],
  providers: [TipoPagamentoService],
  controllers: [TipoPagamentoController]
})
export class TipoPagamentoModule { }
