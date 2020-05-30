import { AdministradoraService } from './administradora.service';
import { Controller, Post, Get, Param, Patch, Body, Delete } from '@nestjs/common';
import { Administradora } from './administradora.entity';
import { DeleteResult } from 'typeorm';

@Controller('administradora')
export class AdministradoraController {
  constructor(private administradoraService: AdministradoraService) { }

  @Post()
  public inserir(@Body() administradora: Administradora): Promise<Administradora> {
    return this.administradoraService.inserir(administradora);
  }

  @Get('/:cta_id')
  public listar(@Param('cta_id') cta_id: number): Promise<Administradora[]> {
    return this.administradoraService.listar(cta_id);
  }

  @Patch()
  public alterar(@Body() administradora: Administradora): Promise<Administradora> {
    console.log(administradora);
    return null;//this.administradoraService.alterar(administradora);
  }

  @Delete()
  public excluir(@Body() id: number): Promise<DeleteResult> {
    console.log(id);
    return null;//this.administradoraService.excluir(id);
  }
}
