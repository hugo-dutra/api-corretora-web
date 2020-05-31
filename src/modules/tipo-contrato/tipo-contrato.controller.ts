import { TipoContratoService } from './tipo-contrato.service';
import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { TipoContrato } from './tipo-contrato.entity';
import { DeleteResult } from 'typeorm';

@Controller('tipo-contrato')
export class TipoContratoController {
  constructor(private tipoContratoService: TipoContratoService) { }

  @Post()
  public inserir(@Body() tipoContrato: TipoContrato): Promise<TipoContrato> {
    return this.tipoContratoService.inserir(tipoContrato);
  }

  @Get('/:cta_id')
  public listar(@Param('cta_id') cta_id: number): Promise<TipoContrato[]> {
    return this.tipoContratoService.listar(cta_id);
  }

  @Patch()
  public Alterar(@Body() tipoContrato: TipoContrato): Promise<TipoContrato> {
    return this.tipoContratoService.alterar(tipoContrato);
  }

  @Delete()
  public excluir(@Body() id: number): Promise<DeleteResult> {
    return this.tipoContratoService.excluir(id);
  }

}
