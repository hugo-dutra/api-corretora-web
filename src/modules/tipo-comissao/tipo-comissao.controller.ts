import { TipoComissao } from './tipo-comissao.entity';
import { TipoComissaoService } from './tipo-comissao.service';
import { Controller, Post, Get, Patch, Delete, Body, Param } from '@nestjs/common';
import { DeleteResult } from 'typeorm';

@Controller('tipo-comissao')
export class TipoComissaoController {
  constructor(private tipoComissaoService: TipoComissaoService) { }

  @Post()
  public inserir(@Body() tipoComissao: TipoComissao): Promise<TipoComissao> {
    return this.tipoComissaoService.inserir(tipoComissao);
  }

  @Get('/:cta_id')
  public listar(@Param('cta_id') cta_id: number): Promise<TipoComissao[]> {
    return this.tipoComissaoService.listar(cta_id);
  }

  @Patch()
  public Alterar(@Body() tipoComissao: TipoComissao): Promise<TipoComissao> {
    return this.tipoComissaoService.alterar(tipoComissao);
  }

  @Delete()
  public excluir(@Body() id: number): Promise<DeleteResult> {
    return this.tipoComissaoService.excluir(id);
  }
}
