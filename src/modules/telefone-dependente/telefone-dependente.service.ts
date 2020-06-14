import { TelefoneDependente } from './telefone-dependente.entity';
import { Injectable } from '@nestjs/common';
import { DeleteResult } from 'typeorm';
import { TelefoneDependenteRepository } from './telefone-dependente.repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TelefoneDependenteService {
  constructor(@InjectRepository(TelefoneDependenteRepository) private telefoneDependenteRepository: TelefoneDependenteRepository) { }

  public inserir(telefones: TelefoneDependente[]): Promise<TelefoneDependente[]> {
    return new Promise((resolve, reject) => {
      this.telefoneDependenteRepository.save(telefones).then(novosTelefones => {
        resolve(novosTelefones);
      }).catch(reason => {
        reject(reason)
      });
    });
  }

  public listar(dpd_id: number): Promise<TelefoneDependente[]> {
    return new Promise((resolve, reject) => {
      this.telefoneDependenteRepository.find({ where: { dpd_id: dpd_id } }).then(telefones => {
        resolve(telefones);
      }).catch(reason => {
        reject(reason);
      });
    });
  }

  public excluir(dpd_id: number): Promise<DeleteResult> {
    const id = dpd_id['id'];
    return new Promise((resolve, reject) => {
      this.telefoneDependenteRepository.createQueryBuilder()
        .delete()
        .where('dpd_id_int = :dpd_id', { dpd_id: id })
        .execute()
        .then(deleteResult => {
          resolve(deleteResult);
        }).catch(reason => {
          reject(reason);
        })
    })
  }
}
