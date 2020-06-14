import { TelefoneDependente } from './telefone-dependente.entity';
import { TelefoneDependenteService } from './telefone-dependente.service';
import { Controller, Post, Get, Delete, Body, Param } from '@nestjs/common';
import { DeleteResult } from 'typeorm';

@Controller('telefone-dependente')
export class TelefoneDependenteController {
  constructor(private telefoneDependenteService: TelefoneDependenteService) { }

  @Post()
  public insert(@Body() telefonesDependente: TelefoneDependente[]): Promise<TelefoneDependente[]> {
    return this.telefoneDependenteService.inserir(telefonesDependente);
  }

  @Get('/:dpd_id')
  public listar(@Param('dpd_id') dpd_id: number): Promise<TelefoneDependente[]> {
    return this.telefoneDependenteService.listar(dpd_id);
  }

  @Delete()
  public excluir(@Body() dpd_id: number): Promise<DeleteResult> {
    return this.telefoneDependenteService.excluir(dpd_id);
  }
}
