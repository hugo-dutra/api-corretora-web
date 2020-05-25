import { Controller, Get, Param, Post, Body, ValidationPipe, Delete, Patch } from '@nestjs/common';
import { Corretora } from './corretora.entity';
import { CorretoraService } from './corretora.service';
import { CorretoraDto } from './dto/corretora.dto';
import { DeleteResult } from 'typeorm';

@Controller('corretora')
export class CorretoraController {
  constructor(private corretoraService: CorretoraService) { }

  /**
   * Nova corretora
   * @param corretoraDto Objeto a ser gravado
   */
  @Post()
  public inserir(@Body(ValidationPipe) corretoraDto: CorretoraDto): Promise<Corretora> {
    return new Promise((resolve, reject) => {
      this.corretoraService.inserirCorretora(corretoraDto).then((corretora: Corretora) => {
        resolve(corretora);
      }).catch((reason: any) => {
        reject(reason);
      });
    });
  }

  /**
   * Listar dados da corretora por id
   * @param id Id da corretora
   */
  @Get('/:id')
  public listarPorId(@Param('id') id: number): Promise<Corretora> {
    return this.corretoraService.listarDadosCorretoraPorId(id);
  }

  /**
   * Altera os dados da corretora
   * @param id Id da corretora
   * @param corretoraDto Objeto a ser gravado
   */
  @Patch('/:id')
  public alterar(@Param('id') id: number, @Body(ValidationPipe) corretoraDto: CorretoraDto): Promise<Corretora> {
    return this.corretoraService.alterarCorretora(id, corretoraDto);
  }

  /**
   * Apaga uma corretora
   * @param id Id da corretora
   */
  @Delete('/:id')
  public excluir(@Param('id') id: number): Promise<DeleteResult> {
    return this.corretoraService.apagarCorretora(id);
  }

  /**
   *Método recuperar todas as corretoras. Referência de consulta
   */
  /* @Get()
  public listarCorretoras(): Promise<Corretora[]> {
    return this.corretoraService.listarCorretoras()
  } */
}
