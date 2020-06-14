import { UsuarioService } from './usuario.service';
import { Controller, Post, Body, Param, Get } from '@nestjs/common';
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

  @Get('/corretora/:cta_id')
  public listarPorCorretoraId(@Param('cta_id') cta_id: number): Promise<any[]> {
    return this.usuarioService.listarPorCorretoraId(cta_id);
  }
}
