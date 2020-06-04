import { ClienteService } from './cliente.service';
import { Cliente } from './cliente.entity';
import { Controller, Get, Body, Post, Param, Patch, Delete } from '@nestjs/common';
import { DeleteResult } from 'typeorm';

@Controller('cliente')
export class ClienteController {
  constructor(private clienteService: ClienteService) { }

  @Post()
  public inserir(@Body() cliente: Cliente): Promise<Cliente> {
    return this.clienteService.inserir(cliente);
  }

  @Get('/:cta_id')
  public listar(@Param('cta_id') cta_id: number): Promise<any[]> {
    return this.clienteService.listar(cta_id);
  }

  @Get('filtrar/:cta_id/:texto')
  public filtrar(@Param('cta_id') cta_id: number, @Param('texto') texto: string): Promise<any[]> {
    return this.clienteService.filtrar(cta_id, texto);
  }

  @Patch()
  public alterar(@Body() cliente: Cliente): Promise<Cliente> {
    return this.clienteService.alterar(cliente);
  }

  @Delete()
  public excluir(@Body() id: number): Promise<DeleteResult> {
    return this.clienteService.excluir(id);
  }

}
