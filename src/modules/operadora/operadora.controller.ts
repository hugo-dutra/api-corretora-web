import { Operadora } from './operadora.entity';
import { OperadoraService } from './operadora.service';
import { Controller, Body, Post, Get, Param, Patch, Delete } from '@nestjs/common';
import { DeleteResult } from 'typeorm';

@Controller('operadora')
export class OperadoraController {
  constructor(private operadoraService: OperadoraService) { }

  @Post()
  public inserir(@Body() operadora: Operadora): Promise<Operadora> {
    return this.operadoraService.inserir(operadora);
  }

  @Get('/:cta_id')
  public listar(@Param('cta_id') cta_id: number): Promise<Operadora[]> {
    return this.operadoraService.listar(cta_id);
  }

  @Patch()
  public Alterar(@Body() operadora: Operadora): Promise<Operadora> {
    return this.operadoraService.alterar(operadora);
  }

  @Delete()
  public excluir(@Body() id: number): Promise<DeleteResult> {
    return this.operadoraService.excluir(id);
  }

}
