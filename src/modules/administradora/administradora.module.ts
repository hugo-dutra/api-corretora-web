import { Module } from '@nestjs/common';
import { AdministradoraService } from './administradora.service';
import { AdministradoraController } from './administradora.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdministradoraRepository } from './administradora.repository';

@Module({
  imports: [TypeOrmModule.forFeature([AdministradoraRepository])],
  providers: [AdministradoraService],
  controllers: [AdministradoraController]
})
export class AdministradoraModule { }
