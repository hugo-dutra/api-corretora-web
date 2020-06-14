import { TipoContrato } from './tipo-contrato.entity';
import { TipoContratoRepository } from './tipo-contrato.repositoty';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult } from 'typeorm';

@Injectable()
export class TipoContratoService {
  constructor(@InjectRepository(TipoContratoRepository) private tipoContratoRepository: TipoContratoRepository) { }

  public inserir(tipoContrato: TipoContrato): Promise<TipoContrato> {
    return new Promise((resolve, reject) => {
      this.verificarExistencia(tipoContrato).then(existe => {
        if (!existe) {
          this.tipoContratoRepository.save(tipoContrato).then(novoTipoContrato => {
            resolve(novoTipoContrato);
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

  public listar(cta_id: number): Promise<TipoContrato[]> {
    return new Promise((resolve, reject) => {
      this.tipoContratoRepository
        .find({ where: { cta_id: cta_id }, order: { nome: "ASC" } }).then(tiposContratos => {
          resolve(tiposContratos);
        }).catch(reason => {
          reject(reason);
        });
    });
  }

  public alterar(tipoContrato: TipoContrato): Promise<TipoContrato> {
    return new Promise((resolve, reject) => {
      this.verificarExistencia(tipoContrato).then(existe => {
        if (!existe) {
          this.tipoContratoRepository.save(tipoContrato).then(contratoAlterado => {
            resolve(contratoAlterado);
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
      this.tipoContratoRepository.delete(id).then(deleteResult => {
        resolve(deleteResult);
      }).catch(reason => {
        reject(reason);
      });
    });
  }

  public verificarExistencia(tipoContrato: TipoContrato): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.tipoContratoRepository.find({ where: { nome: tipoContrato.nome, cta_id: tipoContrato.cta_id } }).then(tiposContratos => {
        if (tiposContratos.length != 0) {
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

