import { ClasseContratoRepository } from './classe-contrato.repository';
import { Module } from '@nestjs/common';
import { ClasseContratoService } from './classe-contrato.service';
import { ClasseContratoController } from './classe-contrato.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ClasseContratoRepository])],
  providers: [ClasseContratoService],
  controllers: [ClasseContratoController]
})
export class ClasseContratoModule { }
