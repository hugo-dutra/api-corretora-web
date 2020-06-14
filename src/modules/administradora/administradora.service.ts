import { Administradora } from './administradora.entity';
import { AdministradoraRepository } from './administradora.repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult } from 'typeorm';

@Injectable()
export class AdministradoraService {
  constructor(@InjectRepository(AdministradoraRepository) private administradoraRepository: AdministradoraRepository) { }

  public inserir(administradora: Administradora): Promise<Administradora> {
    return new Promise((resolve, reject) => {
      this.verificarExistencia(administradora).then(existe => {
        if (!existe) {
          this.administradoraRepository.save(administradora).then(novaAdministradora => {
            resolve(novaAdministradora);
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

  public listar(cta_id: number): Promise<Administradora[]> {
    return new Promise((resolve, reject) => {
      const campos = [
        'adm.adm_id_int as id, ' +
        'adm.adm_nome_txt as nome, ' +
        'adm.cta_id_int as cta_id'
      ];

      this.administradoraRepository.createQueryBuilder('adm')
        .select(campos)
        .where('adm.cta_id_int = :cta_id', { cta_id: cta_id })
        .orderBy('adm.adm_nome_txt', 'ASC')
        .execute()
        .then((administradoras: Administradora[]) => {
          resolve(administradoras);
        }).catch(reason => {
          reject(reason);
        });
    });
  }

  public alterar(administradora: Administradora): Promise<Administradora> {
    return new Promise((resolve, reject) => {
      this.verificarExistencia(administradora).then(existe => {
        if (!existe) {
          this.administradoraRepository.save(administradora).then((administradoraAlterada: Administradora) => {
            resolve(administradoraAlterada);
          });
        } else {
          resolve(null);
        }
      });
    });
  }

  public excluir(id: number): Promise<DeleteResult> {
    return new Promise((resolve, reject) => {
      this.administradoraRepository.delete(id).then(deleteResult => {
        resolve(deleteResult);
      }).catch(reason => {
        reject(reason);
      });
    });
  }

  public verificarExistencia(administradora: Administradora): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.administradoraRepository.find({ where: { nome: administradora.nome, cta_id: administradora.cta_id } }).then(administradoras => {
        if (administradoras.length != 0) {
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
