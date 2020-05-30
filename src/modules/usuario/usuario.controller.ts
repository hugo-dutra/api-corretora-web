import { UsuarioService } from './usuario.service';
import { Controller, Post, Body } from '@nestjs/common';
import { Usuario } from './usuario.entity';

@Controller('usuario')
export class UsuarioController {
  constructor(private usuarioService: UsuarioService) { }

  @Post()
  public inserir(@Body() usuario: any): Promise<Usuario> {
    return this.usuarioService.inserir(usuario);
  }

  @Post('/logar')
  public login(@Body() dadosLogin: any): Promise<Usuario> {
    return this.usuarioService.logarUsuario(dadosLogin);
  }
}
