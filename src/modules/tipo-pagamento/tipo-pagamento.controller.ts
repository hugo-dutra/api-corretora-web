import { DeleteResult } from 'typeorm';
import { TipoPagamento } from './tipo-pagamento.entity';
import { TipoPagamentoService } from './tipo-pagamento.service';
import { Controller, Body, Post, Get, Param, Patch, Delete } from '@nestjs/common';

@Controller('tipo-pagamento')
export class TipoPagamentoController {
  constructor(private tipoPagamentoService: TipoPagamentoService) { }

  @Post()
  public inserir(@Body() tipoPagamento: TipoPagamento): Promise<TipoPagamento> {
    return this.tipoPagamentoService.inserir(tipoPagamento);
  }

  @Get('/:cta_id')
  public listar(@Param('cta_id') cta_id: number): Promise<TipoPagamento[]> {
    return this.tipoPagamentoService.listar(cta_id);
  }

  @Patch()
  public alterar(@Body() tipoPagamento: TipoPagamento): Promise<TipoPagamento> {
    return this.tipoPagamentoService.alterar(tipoPagamento);
  }

  @Delete()
  public excluir(@Body() id: number): Promise<DeleteResult> {
    return this.tipoPagamentoService.excluir(id);
  }

}
