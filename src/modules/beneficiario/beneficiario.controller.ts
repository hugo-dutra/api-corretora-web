import { BeneficiarioService } from './beneficiario.service';
import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { Beneficiario } from './beneficiario.entity';
import { DeleteResult } from 'typeorm';

@Controller('beneficiario')
export class BeneficiarioController {
  constructor(private beneficiarioService: BeneficiarioService) { }

  @Post()
  public inserir(@Body() beneficiario: Beneficiario): Promise<Beneficiario> {
    return this.beneficiarioService.inserir(beneficiario);
  }

  @Get('/:clt_id')
  public listar(@Param('clt_id') clt_id: number): Promise<Beneficiario[]> {
    return this.beneficiarioService.listar(clt_id);
  }

  @Patch()
  public alterar(@Body() beneficiario: Beneficiario): Promise<Beneficiario> {
    return this.beneficiarioService.alterar(beneficiario)
  }

  @Delete()
  public excluir(@Body() id: number): Promise<DeleteResult> {
    return this.beneficiarioService.excluir(id);
  }

}
