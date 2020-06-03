import { ModalidadePlano } from './modalidade-plano.entity';
import { ModalidadePlanoRepositoty } from './modalidade-plano.repositoty';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult } from 'typeorm';


@Injectable()
export class ModalidadePlanoService {
  constructor(@InjectRepository(ModalidadePlanoRepositoty) private modalidadePlanoRepositoty: ModalidadePlanoRepositoty) { }

  public inserir(modalidadePlano: ModalidadePlano): Promise<ModalidadePlano> {
    return new Promise((resolve, reject) => {
      this.verificarExistencia(modalidadePlano).then(existe => {
        if (!existe) {
          this.modalidadePlanoRepositoty.save(modalidadePlano).then(novaModalidade => {
            resolve(novaModalidade);
          }).catch(reason => {
            reject(reason);
          });
        } else {
          resolve(null);
        }
      });
    });
  }

  public listarPorOperadoraId(ope_id: number): Promise<ModalidadePlano[]> {
    return new Promise((resolve, reject) => {
      this.modalidadePlanoRepositoty.find({ where: { ope_id: ope_id } }).then(modalidades => {
        resolve(modalidades);
      }).catch(reason => {
        reject(reason);
      });
    });
  }

  public listar(cta_id: number): Promise<ModalidadePlano[]> {
    return new Promise((resolve, reject) => {
      const campos = [
        'mop.mop_id_int as id, ' +
        'mop.mop_nome_txt as nome, ' +
        'ope.ope_id_int as ope_id, ' +
        'ope.ope_nome_txt as ope_nome'
      ];
      this.modalidadePlanoRepositoty.createQueryBuilder('mop')
        .select(campos)
        .innerJoin('mop.operadora', 'ope')
        .innerJoin('ope.corretora', 'cta')
        .where('ope.cta_id_int = :cta_id', { cta_id: cta_id })
        .orderBy('mop.mop_nome_txt', 'ASC')
        .execute()
        .then(modalidades => {
          resolve(modalidades);
        }).catch(reason => {
          reject(reason);
        });
    });
  }

  public alterar(modalidadePlano: ModalidadePlano): Promise<ModalidadePlano> {
    return new Promise((resolve, reject) => {
      this.verificarExistencia(modalidadePlano).then(existe => {
        if (!existe) {
          this.modalidadePlanoRepositoty.save(modalidadePlano).then(novaModalidade => {
            resolve(novaModalidade);
          }).catch(reason => {
            reject(reason);
          });
        } else {
          resolve(null);
        }
      });
    });
  }

  public excluir(mop_id: number): Promise<DeleteResult> {
    return new Promise((resolve, reject) => {
      this.modalidadePlanoRepositoty.delete(mop_id).then(deleteResult => {
        resolve(deleteResult);
      }).catch(reason => {
        reject(reason);
      });
    });
  }

  public verificarExistencia(modalidadePlano: ModalidadePlano): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.modalidadePlanoRepositoty.find({ where: { nome: modalidadePlano.nome, ope_id: modalidadePlano.ope_id } }).then(modalidades => {
        if (modalidades.length != 0) {
          resolve(true)
        } else {
          resolve(false);
        }
      });
    });
  }

}
