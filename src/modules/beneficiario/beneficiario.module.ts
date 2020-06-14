import { Module } from '@nestjs/common';
import { BeneficiarioService } from './beneficiario.service';
import { BeneficiarioController } from './beneficiario.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BeneficiarioRepository } from './beneficiario.repository';

@Module({
  imports: [TypeOrmModule.forFeature([BeneficiarioRepository])],
  providers: [BeneficiarioService],
  controllers: [BeneficiarioController]
})
export class BeneficiarioModule { }
