import { Module } from '@nestjs/common';
import { BoletoController } from './boleto.controller';
import { BoletoService } from './boleto.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoletoRepository } from './boleto.repository';

@Module({
  imports: [TypeOrmModule.forFeature([BoletoRepository])],
  controllers: [BoletoController],
  providers: [BoletoService]
})
export class BoletoModule { }
