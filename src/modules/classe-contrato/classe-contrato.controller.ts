import { ClasseContrato } from './classe-contrato.entity';
import { ClasseContratoService } from './classe-contrato.service';
import { Controller, Post, Get, Patch, Delete, Body, Param } from '@nestjs/common';
import { DeleteResult } from 'typeorm';

@Controller('classe-contrato')
export class ClasseContratoController {
  constructor(private classeContratoService: ClasseContratoService) { }

  @Post()
  public inserir(@Body() classeContrato: ClasseContrato): Promise<ClasseContrato> {
    return this.classeContratoService.inserir(classeContrato);
  }

  @Get('/:cta_id')
  public listar(@Param('cta_id') cta_id: number): Promise<ClasseContrato[]> {
    return this.classeContratoService.listar(cta_id);
  }

  @Patch()
  public alterar(@Body() administradora: ClasseContrato): Promise<ClasseContrato> {
    return this.classeContratoService.alterar(administradora);
  }

  @Delete()
  public excluir(@Body() id: number): Promise<DeleteResult> {
    return this.classeContratoService.excluir(id);
  }

}
