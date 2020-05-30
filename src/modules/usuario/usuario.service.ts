import { UsuarioRepositoty } from './usuario.repositoty';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './usuario.entity';
import { DeleteResult } from 'typeorm';

@Injectable()
export class UsuarioService {
  constructor(@InjectRepository(UsuarioRepositoty) private usuarioRepository: UsuarioRepositoty) { }

  public inserir(usuario: Usuario): Promise<Usuario> {
    usuario.salt = 'criar salt generator';
    return new Promise((resolve, reject) => {
      this.verificarExistencia(usuario).then(existe => {
        if (!existe) {
          this.usuarioRepository.save(usuario).then(novoUsuario => {
            delete novoUsuario.senha;
            delete novoUsuario.salt;
            resolve(novoUsuario);
          });
        } else {
          reject({ msg: 'email já cadastrado' });
        }
      })
    });
  }

  public logarUsuario(usuario: Usuario): Promise<any> {
    return new Promise((resolve, reject) => {
      this.usuarioRepository.find({ where: { email: usuario.email, senha: usuario.senha } }).then(usuarios => {
        if (usuarios.length == 1) {
          const usuarioEncontrado = usuarios[0];
          delete usuarioEncontrado.email;
          delete usuarioEncontrado.per_id;
          delete usuarioEncontrado.senha;
          delete usuarioEncontrado.salt;
          resolve(usuarioEncontrado);
        } else {
          reject(new NotFoundException('invalid credentials'));
        }
      }).catch(reason => {
        reject(reason);
      })
    })
  }

  public listarPorId(usuario: Usuario): Promise<Usuario> {
    return new Promise((resolve, reject) => {
      this.usuarioRepository.findByIds([usuario.id]).then(usuarios => {
        const usuarioDto = new Usuario();
        if (usuarios.length == 1) {
          usuarioDto.id = usuarios[0].id;
          usuarioDto.email = usuarios[0].email;
          usuarioDto.nome = usuarios[0].nome;
        }
        resolve(usuarioDto);
      }).catch(reason => {
        reject(reason);
      })
    })
  }

  public alterar(usuario: Usuario): Promise<Usuario> {
    return new Promise((resolve, reject) => {
      this.usuarioRepository.save(usuario).then(usuario => {
        const usuarioDto = new Usuario();
        usuarioDto.id = usuario.id;
        usuarioDto.nome = usuario.nome;
      });
    });
  }

  public excluir(usuario: Usuario): Promise<DeleteResult> {
    return new Promise((resolve, reject) => {
      this.usuarioRepository.delete(usuario.id).then(deleteResult => {
        resolve(deleteResult);
      }).catch(reason => {
        reject(reason);
      });
    });
  }

  public verificarExistencia(usuario: Usuario): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.usuarioRepository.find({ where: { email: usuario.email } }).then(usuarios => {
        if (usuarios.length != 0) {
          resolve(true);
        } else {
          resolve(false);
        }
      }).catch(reason => {
        reject(reason);
      });
    });
  }
}
