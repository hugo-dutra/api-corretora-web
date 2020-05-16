import { Module } from '@nestjs/common';
import { AdministradoraService } from './administradora.service';
import { AdministradoraController } from './administradora.controller';

@Module({
  providers: [AdministradoraService],
  controllers: [AdministradoraController]
})
export class AdministradoraModule {}
