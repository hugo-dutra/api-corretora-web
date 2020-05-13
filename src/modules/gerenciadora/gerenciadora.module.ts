import { Module } from '@nestjs/common';
import { GerenciadoraService } from './gerenciadora.service';
import { GerenciadoraController } from './gerenciadora.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GerenciadoraRepositoty } from './gerenciadora.repositoty';

@Module({
  imports: [TypeOrmModule.forFeature([GerenciadoraRepositoty])],
  providers: [GerenciadoraService],
  controllers: [GerenciadoraController]
})
export class GerenciadoraModule { }
