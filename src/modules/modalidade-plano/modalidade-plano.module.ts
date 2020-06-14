import { Module } from '@nestjs/common';
import { ModalidadePlanoService } from './modalidade-plano.service';
import { ModalidadePlanoController } from './modalidade-plano.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModalidadePlanoRepositoty } from './modalidade-plano.repositoty';

@Module({
  imports: [TypeOrmModule.forFeature([ModalidadePlanoRepositoty])],
  providers: [ModalidadePlanoService],
  controllers: [ModalidadePlanoController]
})
export class ModalidadePlanoModule { }
