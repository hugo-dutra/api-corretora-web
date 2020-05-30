import { Controller, Get, Param, Post, Body, ValidationPipe, Delete, Patch } from '@nestjs/common';
import { Corretora } from './corretora.entity';
import { CorretoraService } from './corretora.service';
import { DeleteResult } from 'typeorm';

@Controller('corretora')
export class CorretoraController {
  constructor(private corretoraService: CorretoraService) { }

  /**
   * Nova corretora
   * @param corretora Objeto a ser gravado
   */
  @Post()
  public inserir(@Body() corretora: Corretora): Promise<Corretora> {
    return this.corretoraService.inserir(corretora);
  }

  /**
   * Listar dados da corretora por id
   * @param id Id da corretora
   */
  @Get('/:id')
  public listarPorId(@Param('id') id: number): Promise<Corretora> {
    return this.corretoraService.listarDadosPorId(id);
  }

  /**
   * Altera os dados da corretora
   * @param id Id da corretora
   * @param corretora Objeto a ser gravado
   */
  @Patch('/:id')
  public alterar(@Param('id') id: number, @Body() corretora: Corretora): Promise<Corretora> {
    return this.corretoraService.alterar(corretora);
  }

  /**
   * Apaga uma corretora
   * @param id Id da corretora
   */
  @Delete('/:id')
  public excluir(@Param('id') id: number): Promise<DeleteResult> {
    return this.corretoraService.apagar(id);
  }

}
