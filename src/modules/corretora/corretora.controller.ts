import { Controller, Get, Param, Post, Body, ValidationPipe, Delete, Patch } from '@nestjs/common';
import { Corretora } from './corretora.entity';
import { CorretoraService } from './corretora.service';
import { CorretoraDto } from './dto/corretora.dto';
import { DeleteResult } from 'typeorm';

@Controller('corretora')
export class CorretoraController {
  constructor(private corretoraService: CorretoraService) { }

  @Post()
  public novaCorretora(@Body(ValidationPipe) corretoraDto: CorretoraDto): Promise<Corretora> {
    return new Promise((resolve, reject) => {
      this.corretoraService.inserirCorretora(corretoraDto).then((corretora: Corretora) => {
        resolve(corretora);
      }).catch((reason: any) => {
        reject(reason);
      });
    });
  }

  @Get('/:id')
  public pegarCorretoraPorId(@Param('id') id: number): Promise<Corretora> {
    return this.corretoraService.listarDadosCorretoraPorId(id);
  }

  @Patch('/:id')
  public alterarCorretora(@Param('id') id: number, @Body(ValidationPipe) corretoraDto: CorretoraDto): Promise<Corretora> {
    return this.corretoraService.alterarCorretora(id, corretoraDto);
  }

  @Delete('/:id')
  public apagarCorretora(@Param('id') id: number): Promise<DeleteResult> {
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
