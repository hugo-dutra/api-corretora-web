import { Operadora } from './operadora.entity';
import { OperadoraRepository } from './operadora.repositoty';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult } from 'typeorm';

@Injectable()
export class OperadoraService {
  constructor(@InjectRepository(OperadoraRepository) private operadoraRepository: OperadoraRepository) { }

  public inserir(operadora: Operadora): Promise<Operadora> {
    return new Promise((resolve, reject) => {
      this.verificarExistencia(operadora).then(existe => {
        if (!existe) {
          this.operadoraRepository.save(operadora).then(novaOperadora => {
            resolve(novaOperadora);
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

  public listar(cta_id: number): Promise<Operadora[]> {
    return new Promise((resolve, reject) => {
      this.operadoraRepository
        .find({ where: { cta_id: cta_id }, order: { nome: "ASC" } }).then(operadoras => {
          resolve(operadoras);
        }).catch(reason => {
          reject(reason);
        });
    });
  }

  public alterar(operadora: Operadora): Promise<Operadora> {
    return new Promise((resolve, reject) => {
      this.verificarExistencia(operadora).then(existe => {
        if (!existe) {
          this.operadoraRepository.save(operadora).then(novaOperadora => {
            resolve(novaOperadora);
          }).catch(reason => {
            reject(reason);
          });
        } else {
          resolve(null);
        }
      }).catch(reason => {
        reject(reason);
      });
    })
  }

  public excluir(id: number): Promise<DeleteResult> {
    return new Promise((resolve, reject) => {
      this.operadoraRepository.delete(id).then(deleteResult => {
        resolve(deleteResult);
      }).catch(reason => {
        reject(reason);
      })
    })
  }

  public verificarExistencia(operadora: Operadora): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.operadoraRepository.find({ where: { nome: operadora.nome, cta_id: operadora.cta_id } }).then(operadoras => {
        if (operadoras.length != 0) {
          resolve(true);
        } else {
          resolve(false);
        }
      }).catch(reason => {
        reject(reason);
      })
    })
  }

}
