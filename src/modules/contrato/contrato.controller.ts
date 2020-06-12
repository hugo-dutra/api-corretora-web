import { ContratoService } from './contrato.service';
import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { Contrato } from './contrato.entity';
import { DeleteResult } from 'typeorm';

@Controller('contrato')
export class ContratoController {
  constructor(private contratoService: ContratoService) { }

  @Post()
  public inserir(@Body() contrato: Contrato): Promise<Contrato> {
    return this.contratoService.inserir(contrato);
  }

  @Get('/corretora/:cta_id')
  public listarPorCorretoraId(@Param('cta_id') cta_id: number): Promise<Contrato[]> {
    return this.contratoService.listarPorCorretoraId(cta_id);
  }

  @Get('/usuario/:usr_id')
  public listarPorUsuarioId(@Param('usr_id') usr_id: number): Promise<Contrato[]> {
    return this.contratoService.listarPorUsuarioId(usr_id);
  }

  @Patch()
  public alterar(@Body() contrato: Contrato): Promise<Contrato> {
    return this.contratoService.alterar(contrato);
  }

  @Delete()
  public excluir(@Body() id: any): Promise<DeleteResult> {
    return this.contratoService.excluir(id);
  }

}
