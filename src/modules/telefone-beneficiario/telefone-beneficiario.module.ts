import { Module } from '@nestjs/common';
import { TelefoneBeneficiarioService } from './telefone-beneficiario.service';
import { TelefoneBeneficiarioController } from './telefone-beneficiario.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TelefoneBeneficiarioRepository } from './telefone-beneficiario.repository';

@Module({
  imports: [TypeOrmModule.forFeature([TelefoneBeneficiarioRepository])],
  providers: [TelefoneBeneficiarioService],
  controllers: [TelefoneBeneficiarioController],

})
export class TelefoneBeneficiarioModule { }
