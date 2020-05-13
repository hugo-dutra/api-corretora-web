import { Module } from '@nestjs/common';
import { PermissaoService } from './permissao.service';
import { PermissaoController } from './permissao.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PermissaoRepositoty } from './permissao.repositoty';

@Module({
  imports: [TypeOrmModule.forFeature([PermissaoRepositoty])],
  providers: [PermissaoService],
  controllers: [PermissaoController]
})
export class PermissaoModule { }
