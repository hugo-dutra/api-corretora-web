import { Module } from '@nestjs/common';
import { CorretoraService } from './corretora.service';
import { CorretoraController } from './corretora.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CorretoraRepositoty } from './corretora.repositoty';

@Module({
  imports: [TypeOrmModule.forFeature([CorretoraRepositoty])],
  providers: [CorretoraService],
  controllers: [CorretoraController]
})
export class CorretoraModule { }
