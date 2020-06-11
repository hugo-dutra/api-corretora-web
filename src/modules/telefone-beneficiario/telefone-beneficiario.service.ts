import { TelefoneBeneficiario } from './telefone-beneficiario.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TelefoneBeneficiarioRepository } from './telefone-beneficiario.repository';
import { DeleteResult } from 'typeorm';

@Injectable()
export class TelefoneBeneficiarioService {
  constructor(@InjectRepository(TelefoneBeneficiarioRepository) private telefoneBeneficiarioRepository: TelefoneBeneficiarioRepository) { }

  public inserir(telefones: TelefoneBeneficiario[]): Promise<TelefoneBeneficiario[]> {
    return new Promise((resolve, reject) => {
      this.telefoneBeneficiarioRepository.save(telefones).then(novosTelefones => {
        resolve(novosTelefones);
      }).catch(reason => {
        reject(reason)
      });
    });
  }

  public listar(bnf_id: number): Promise<TelefoneBeneficiario[]> {
    return new Promise((resolve, reject) => {
      this.telefoneBeneficiarioRepository.find({ where: { bnf_id: bnf_id } }).then(telefones => {
        resolve(telefones);
      }).catch(reason => {
        reject(reason);
      });
    });
  }

  public excluir(bnf_id: number): Promise<DeleteResult> {
    return new Promise((resolve, reject) => {
      this.telefoneBeneficiarioRepository.createQueryBuilder()
        .delete()
        .where('bnf_id_int = :bnf_id', { bnf_id: bnf_id })
        .execute()
        .then(deleteResult => {
          resolve(deleteResult);
        }).catch(reason => {
          reject(reason);
        })
    })
  }
}
