import { Module } from '@nestjs/common';
import { TelefoneClienteService } from './telefone-cliente.service';
import { TelefoneClienteController } from './telefone-cliente.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TelefoneClienteRepository } from './telefone-cliente.repository';

@Module({
  imports: [TypeOrmModule.forFeature([TelefoneClienteRepository])],
  providers: [TelefoneClienteService],
  controllers: [TelefoneClienteController]
})
export class TelefoneModule { }
