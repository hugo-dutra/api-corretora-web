import { CorretoraRepositoty } from './corretora.repositoty';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Corretora } from './corretora.entity';
import { DeleteResult, UpdateResult } from 'typeorm';

@Injectable()
export class CorretoraService {
  constructor(@InjectRepository(CorretoraRepositoty) private corretoraRepository: CorretoraRepositoty) { }

  /**
   * Grava uma nova corretora
   * @param corretora
   */
  public inserir(corretora: Corretora): Promise<Corretora> {
    return new Promise((resolve, reject) => {
      this.verificarExistencia(corretora).then(existe => {
        if (!existe) {
          this.corretoraRepository.save(corretora).then((corretora: Corretora) => {
            resolve(corretora);
          }).catch((reason: any) => {
            reject(reason)
          });
        } else {
          reject({ msg: 'Email já utilizado' });
        }
      }).catch(reason => {
        reject(reason)
      });
    });
  }

  public verificarExistencia(corretora: Corretora): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.corretoraRepository.find({ where: { email: corretora.email } }).then(corretoras => {
        if (corretoras.length != 0) {
          resolve(true);
        } else {
          resolve(false);
        }
      });
    });
  }

  /**
   * Recupera a corretora pelo Id
   * @param id Id da corretora
   */
  public listarDadosPorId(id: number): Promise<Corretora> {
    return new Promise((resolve, reject) => {
      this.corretoraRepository.findOne(id).then((corretora: Corretora) => {
        resolve(corretora);
      }).catch((reason: any) => {
        reject(reason);
      });
    });
  }

  /**
   * Recupera todas as corretoras
   * @param id Id da corretora
   */
  public listar(): Promise<Corretora[]> {
    return new Promise((resolve, reject) => {
      this.corretoraRepository.find().then((corretoras: Corretora[]) => {
        resolve(corretoras);
      }).catch((reason: any) => {
        reject(reason);
      });
    });
  }

  /**
   * Alterar os dados da corretora
   * @param id Id da corretora a ser alterada
   * @param corretora Dados a serem alterados
   */
  public alterar(corretora: Corretora): Promise<Corretora> {
    return new Promise((resolve, reject) => {
      this.corretoraRepository.save(corretora).then((corretora: Corretora) => {
        resolve(corretora);
      }).catch((reason: any) => {
        reject(reason);
      });
    });
  }

  /**
   * Apaga a corretora de Id Informado
   * @param id Id da corretora selecionada
   */
  public apagar(id: number): Promise<DeleteResult> {
    return new Promise((resolve, reject) => {
      this.corretoraRepository.delete(id).then((deleteResult: DeleteResult) => {
        resolve(deleteResult);
      }).catch((reason: any) => {
        reject(reason);
      })
    })
  }

}
