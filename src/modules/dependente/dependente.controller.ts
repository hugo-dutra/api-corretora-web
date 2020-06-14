import { Dependente } from './dependente.entity';
import { Controller, Post, Body, Param, Get, Patch, Delete } from '@nestjs/common';
import { DependenteService } from './dependente.service';
import { DeleteResult } from 'typeorm';

@Controller('dependente')
export class DependenteController {
  constructor(private dependenteService: DependenteService) { }

  @Post()
  public inserir(@Body() dependente: Dependente): Promise<Dependente> {
    return this.dependenteService.inserir(dependente);
  }

  @Get('/:bnf_id')
  public listar(@Param('bnf_id') bnf_id: number): Promise<Dependente[]> {
    return this.dependenteService.listar(bnf_id);
  }

  @Patch()
  public alterar(@Body() dependente: Dependente): Promise<Dependente> {
    return this.dependenteService.alterar(dependente);
  }

  @Delete()
  public excluir(@Body() id: number): Promise<DeleteResult> {
    return this.dependenteService.excluir(id);
  }


}
