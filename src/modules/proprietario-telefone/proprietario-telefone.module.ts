import { ProprietarioTelefoneRepository } from './proprietario-telefone.repository';
import { Module } from '@nestjs/common';
import { ProprietarioTelefoneService } from './proprietario-telefone.service';
import { ProprietarioTelefoneController } from './proprietario-telefone.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ProprietarioTelefoneRepository])],
  providers: [ProprietarioTelefoneService],
  controllers: [ProprietarioTelefoneController]
})
export class ProprietarioTelefoneModule { }
