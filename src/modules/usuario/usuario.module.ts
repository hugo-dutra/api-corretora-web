import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioRepositoty } from './usuario.repositoty';

@Module({
  imports: [TypeOrmModule.forFeature([UsuarioRepositoty])],
  providers: [UsuarioService],
  controllers: [UsuarioController]
})
export class UsuarioModule { }
