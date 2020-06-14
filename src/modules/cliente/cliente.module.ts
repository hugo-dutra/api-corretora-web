import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { ClienteController } from './cliente.controller';
import { ClienteRepositoty } from './cliente.repositoty';

@Module({
  imports: [TypeOrmModule.forFeature([ClienteRepositoty])],
  providers: [ClienteService],
  controllers: [ClienteController]
})
export class ClienteModule { }
