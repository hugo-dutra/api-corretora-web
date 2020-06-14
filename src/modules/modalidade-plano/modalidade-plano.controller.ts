import { DeleteResult } from 'typeorm';
import { ModalidadePlano } from './modalidade-plano.entity';
import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { ModalidadePlanoService } from './modalidade-plano.service';

@Controller('modalidade-plano')
export class ModalidadePlanoController {
  constructor(private modalidadePlanoService: ModalidadePlanoService) { }

  @Post()
  public inserir(@Body() modalidadePlano: ModalidadePlano): Promise<ModalidadePlano> {
    return this.modalidadePlanoService.inserir(modalidadePlano);
  }

  @Get('/operadora/:ope_id')
  public listarPorOperadoraId(@Param('ope_id') ope_id: number): Promise<ModalidadePlano[]> {
    return this.modalidadePlanoService.listarPorOperadoraId(ope_id);
  }

  @Get('/:cta_id')
  public listar(@Param('cta_id') cta_id: number): Promise<ModalidadePlano[]> {
    return this.modalidadePlanoService.listar(cta_id);
  }

  @Patch()
  public alterar(@Body() modalidadePlano: ModalidadePlano): Promise<ModalidadePlano> {
    return this.modalidadePlanoService.alterar(modalidadePlano);
  }

  @Delete()
  public excluir(@Body() mop_id: number): Promise<DeleteResult> {
    return this.modalidadePlanoService.excluir(mop_id);
  }

}
