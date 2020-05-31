import { TipoComissao } from './tipo-comissao.entity';
import { TipoComissaoRepository } from './tipo-comissao.repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult } from 'typeorm';

@Injectable()
export class TipoComissaoService {
  constructor(@InjectRepository(TipoComissaoRepository) private tipoComissaoRepository: TipoComissaoRepository) { }

  public inserir(tipoComissao: TipoComissao): Promise<TipoComissao> {
    return new Promise((resolve, reject) => {
      this.verificarExistencia(tipoComissao).then(existe => {
        if (!existe) {
          this.tipoComissaoRepository.save(tipoComissao).then(novoTipoComissao => {
            resolve(novoTipoComissao);
          }).catch(reason => {
            reject(reason);
          });
        } else {
          resolve(null);
        }
      }).catch(reason => {
        reject(reason);
      });
    });
  }

  public listar(cta_id: number): Promise<TipoComissao[]> {
    return new Promise((resolve, reject) => {
      this.tipoComissaoRepository
        .find({ where: { cta_id: cta_id }, order: { nome: "ASC" } }).then(tiposComissao => {
          resolve(tiposComissao);
        }).catch(reason => {
          reject(reason);
        });
    });
  }

  public alterar(tipoComissao: TipoComissao): Promise<TipoComissao> {
    return new Promise((resolve, reject) => {
      this.verificarExistencia(tipoComissao).then(existe => {
        if (!existe) {
          this.tipoComissaoRepository.save(tipoComissao).then(novoTipoComissao => {
            resolve(novoTipoComissao);
          }).catch(reason => {
            reject(reason);
          });
        } else {
          resolve(null);
        }
      }).catch(reason => {
        reject(reason);
      });
    });
  }

  public excluir(id: number): Promise<DeleteResult> {
    return new Promise((resolve, reject) => {
      this.tipoComissaoRepository.delete(id).then(deleteResult => {
        resolve(deleteResult);
      }).catch(reason => {
        reject(reason);
      });
    });
  }

  public verificarExistencia(tipoComissao: TipoComissao): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.tipoComissaoRepository.find({ where: { nome: tipoComissao.nome, cta_id: tipoComissao.cta_id, percentual_associado: tipoComissao.percentual_associado } }).then(tiposComissao => {
        if (tiposComissao.length != 0) {
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
