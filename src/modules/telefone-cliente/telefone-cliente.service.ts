import { TelefoneClienteRepository } from './telefone-cliente.repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TelefoneCliente } from './telefone-cliente.entity';
import { rejects } from 'assert';
import { DeleteResult } from 'typeorm';

@Injectable()
export class TelefoneClienteService {
  constructor(@InjectRepository(TelefoneClienteRepository) private telefoneClienteRepository: TelefoneClienteRepository) { }

  public inserir(telefones: TelefoneCliente[]): Promise<TelefoneCliente[]> {
    return new Promise((resolve, reject) => {
      this.telefoneClienteRepository.save(telefones).then(novosTelefones => {
        resolve(novosTelefones);
      }).catch(reason => {
        reject(reason)
      });
    });
  }

  public listar(clt_id: number): Promise<TelefoneCliente[]> {
    return new Promise((resolve, reject) => {
      this.telefoneClienteRepository.find({ where: { clt_id: clt_id } }).then(telefones => {
        resolve(telefones);
      }).catch(reason => {
        reject(reason);
      });
    });
  }

  public excluir(clt_id: number): Promise<DeleteResult> {
    const id = clt_id['id'];
    return new Promise((resolve, reject) => {
      this.telefoneClienteRepository.createQueryBuilder()
        .delete()
        .where('clt_id_int = :clt_id', { clt_id: id })
        .execute()
        .then(deleteResult => {
          resolve(deleteResult);
        }).catch(reason => {
          reject(reason);
        })
    })
  }

}
