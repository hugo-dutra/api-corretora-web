import { Module } from '@nestjs/common';
import { TelefoneService } from './telefone.service';
import { TelefoneController } from './telefone.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TelefoneRepository } from './telefone.repository';

@Module({
  imports: [TypeOrmModule.forFeature([TelefoneRepository])],
  providers: [TelefoneService],
  controllers: [TelefoneController]
})
export class TelefoneModule { }
