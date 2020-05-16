import { OperadoraRepository } from './operadora.repositoty';
import { Module } from '@nestjs/common';
import { OperadoraService } from './operadora.service';
import { OperadoraController } from './operadora.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([OperadoraRepository])],
  providers: [OperadoraService],
  controllers: [OperadoraController]
})
export class OperadoraModule { }
