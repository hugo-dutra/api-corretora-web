import { TelefoneBeneficiario } from './telefone-beneficiario.entity';
import { Controller, Post, Get, Delete, Body, Param } from '@nestjs/common';
import { TelefoneBeneficiarioService } from './telefone-beneficiario.service';
import { DeleteResult } from 'typeorm';

@Controller('telefone-beneficiario')
export class TelefoneBeneficiarioController {
  constructor(private belefoneBeneficiarioService: TelefoneBeneficiarioService) { }

  @Post()
  public insert(@Body() telefonesBeneficiario: TelefoneBeneficiario[]): Promise<TelefoneBeneficiario[]> {
    return this.belefoneBeneficiarioService.inserir(telefonesBeneficiario);
  }

  @Get('/:bnf_id')
  public listar(@Param('bnf_id') bnf_id: number): Promise<TelefoneBeneficiario[]> {
    return this.belefoneBeneficiarioService.listar(bnf_id);
  }

  @Delete()
  public excluir(@Body() bnf_id: number): Promise<DeleteResult> {
    return this.belefoneBeneficiarioService.excluir(bnf_id);
  }
}
