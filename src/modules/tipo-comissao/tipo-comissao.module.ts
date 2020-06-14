import { TipoComissaoRepository } from './tipo-comissao.repository';
import { Module } from '@nestjs/common';
import { TipoComissaoController } from './tipo-comissao.controller';
import { TipoComissaoService } from './tipo-comissao.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TipoComissaoRepository])],
  controllers: [TipoComissaoController],
  providers: [TipoComissaoService]
})
export class TipoComissaoModule { }
