import { Module } from '@nestjs/common';
import { TelefoneDependenteService } from './telefone-dependente.service';
import { TelefoneDependenteController } from './telefone-dependente.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TelefoneDependenteRepository } from './telefone-dependente.repository';

@Module({
  imports: [TypeOrmModule.forFeature([TelefoneDependenteRepository])],
  providers: [TelefoneDependenteService],
  controllers: [TelefoneDependenteController]
})
export class TelefoneDependenteModule { }
