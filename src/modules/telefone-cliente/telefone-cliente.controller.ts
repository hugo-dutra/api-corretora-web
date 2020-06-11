import { TelefoneClienteService } from './telefone-cliente.service';
import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { TelefoneCliente } from './telefone-cliente.entity';
import { DeleteResult } from 'typeorm';

@Controller('telefone-cliente')
export class TelefoneClienteController {
  constructor(private telefoneClienteService: TelefoneClienteService) { }

  @Post()
  public insert(@Body() telefonesCliente: TelefoneCliente[]): Promise<TelefoneCliente[]> {
    return this.telefoneClienteService.inserir(telefonesCliente);
  }

  @Get('/:clt_id')
  public listar(@Param('clt_id') clt_id: number): Promise<TelefoneCliente[]> {
    return this.telefoneClienteService.listar(clt_id);
  }

  @Delete()
  public excluir(@Body() clt_id: number): Promise<DeleteResult> {
    return this.telefoneClienteService.excluir(clt_id);
  }

}
