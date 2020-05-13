import { Module } from '@nestjs/common';
import { DependenteService } from './dependente.service';
import { DependenteController } from './dependente.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DependenteRepository } from './dependente.repository';

@Module({
  imports: [TypeOrmModule.forFeature([DependenteRepository])],
  providers: [DependenteService],
  controllers: [DependenteController]
})
export class DependenteModule { }
