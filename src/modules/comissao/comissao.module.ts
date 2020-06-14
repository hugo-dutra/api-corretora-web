import { Module } from '@nestjs/common';
import { ComissaoService } from './comissao.service';
import { ComissaoController } from './comissao.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComissaoRepository } from './comissao.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ComissaoRepository])],
  providers: [ComissaoService],
  controllers: [ComissaoController]
})
export class ComissaoModule { }
