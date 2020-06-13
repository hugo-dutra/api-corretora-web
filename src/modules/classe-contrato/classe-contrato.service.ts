import { InjectRepository } from '@nestjs/typeorm';
import { ClasseContratoRepository } from './classe-contrato.repository';
import { Injectable } from '@nestjs/common';
import { ClasseContrato } from './classe-contrato.entity';
import { DeleteResult } from 'typeorm';

@Injectable()
export class ClasseContratoService {

  constructor(@InjectRepository(ClasseContratoRepository) private classeContratoRepository: ClasseContratoRepository) { }

  public inserir(classeContrato: ClasseContrato): Promise<ClasseContrato> {
    return new Promise((resolve, reject) => {
      this.verificarExistencia(classeContrato).then(existe => {
        if (!existe) {
          this.classeContratoRepository.save(classeContrato).then(novaClasseContrato => {
            resolve(novaClasseContrato);
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

  public listar(cta_id: number): Promise<ClasseContrato[]> {
    return new Promise((resolve, reject) => {
      const campos = [
        'clc.clc_id_int as id, ' +
        'clc.clc_nome_txt as nome, ' +
        'clc.cta_id_int as cta_id, ' +
        'tco.tco_id_int as tco_id, ' +
        'tco.tco_nome_txt as tco_nome '
      ];
      this.classeContratoRepository.createQueryBuilder('clc')
        .select(campos)
        .innerJoin('clc.tiposContratos', 'tco')
        .where('clc.cta_id_int = :cta_id', { cta_id: cta_id })
        .orderBy('clc.clc_nome_txt', 'ASC')
        .execute()
        .then((classeContrato: ClasseContrato[]) => {
          resolve(classeContrato);
        }).catch(reason => {
          reject(reason);
        });
    });
  }

  public listarPorTipoDeContratoId(tco_id: number): Promise<ClasseContrato[]> {
    return new Promise((resolve, reject) => {
      const campos = [
        'clc.clc_id_int as id, ' +
        'clc.clc_nome_txt as nome, ' +
        'clc.cta_id_int as cta_id, ' +
        'tco.tco_id_int as tco_id, ' +
        'tco.tco_nome_txt as tco_nome '
      ];
      this.classeContratoRepository.createQueryBuilder('clc')
        .select(campos)
        .innerJoin('clc.tiposContratos', 'tco')
        .where('clc.tco_id_int = :tco_id', { tco_id: tco_id })
        .orderBy('clc.clc_nome_txt', 'ASC')
        .execute()
        .then((classeContrato: ClasseContrato[]) => {
          resolve(classeContrato);
        }).catch(reason => {
          reject(reason);
        });
    });
  }

  public alterar(classeContrato: ClasseContrato): Promise<ClasseContrato> {
    return new Promise((resolve, reject) => {
      this.verificarExistencia(classeContrato).then(existe => {
        if (!existe) {
          this.classeContratoRepository.save(classeContrato).then((classeContratoAlterada: ClasseContrato) => {
            resolve(classeContratoAlterada);
          });
        } else {
          resolve(null);
        }
      }).catch(reason => {
        reject(reason);
      })
    });
  }

  public excluir(id: number): Promise<DeleteResult> {
    return new Promise((resolve, reject) => {
      this.classeContratoRepository.delete(id).then(deleteResult => {
        resolve(deleteResult);
      }).catch(reason => {
        reject(reason);
      });
    });
  }

  public verificarExistencia(classeContrato: ClasseContrato): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.classeContratoRepository.find({ where: { nome: classeContrato.nome, cta_id: classeContrato.cta_id, tco_id: classeContrato.tco_id } }).then(classesContrato => {
        if (classesContrato.length != 0) {
          resolve(true)
        } else {
          resolve(false);
        }
      }).catch(reason => {
        reject(reason);
      })
    })
  }

}
