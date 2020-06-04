import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClienteRepositoty } from './cliente.repositoty';
import { Cliente } from './cliente.entity';
import { DeleteResult } from 'typeorm';

@Injectable()
export class ClienteService {
  constructor(@InjectRepository(ClienteRepositoty) private clienteRepositoty: ClienteRepositoty) { }

  public inserir(cliente: Cliente): Promise<Cliente> {
    return new Promise((resolve, reject) => {
      this.verificarExistencia(cliente).then(existe => {
        if (!existe) {
          this.clienteRepositoty.save(cliente).then(novoCliente => {
            resolve(novoCliente);
          }).catch(reason => {
            reject(reason);
          });
        }
      }).catch(reason => {
        reject(reason);
      });
    });
  }

  public listar(cta_id: number): Promise<any[]> {
    return new Promise((resolve, reject) => {
      const campos = [
        'clt.clt_id_int as id, ' +
        'cta.cta_id_int as cta_id, ' +
        'cta.cta_nome_txt as cta_nome, ' +
        'clt.clt_cep_txt as cep, ' +
        'clt.clt_endereco_txt as endereco, ' +
        'clt.clt_cidade_txt as cidade, ' +
        'clt.clt_uf_txt as uf, ' +
        'clt.clt_email_txt as email, ' +
        'usr.usr_id_int as usr_id, ' +
        'usr.usr_nome_txt as usr_nome, ' +
        'clt.clt_nome_txt as nome, ' +
        'clt.clt_cpf_cnpj_txt as cpf_cnpj'
      ];
      this.clienteRepositoty.createQueryBuilder('clt').select(campos)
        .innerJoin('clt.usuario', 'usr')
        .innerJoin('clt.corretora', 'cta')
        .where('cta.cta_id_int = :cta_id', { cta_id: cta_id })
        .orderBy('clt.clt_nome_txt', 'ASC')
        .execute()
        .then(clientes => {
          resolve(clientes);
        }).catch(reason => {
          reject(reason);
        });
    });
  }

  public filtrar(cta_id: number, texto: string): Promise<any[]> {
    return new Promise((resolve, reject) => {
      const campos = [
        'clt.clt_id_int as id, ' +
        'cta.cta_id_int as cta_id, ' +
        'cta.cta_nome_txt as cta_nome, ' +
        'clt.clt_cep_txt as cep, ' +
        'clt.clt_endereco_txt as endereco, ' +
        'clt.clt_cidade_txt as cidade, ' +
        'clt.clt_uf_txt as uf, ' +
        'clt.clt_email_txt as email, ' +
        'usr.usr_id_int as usr_id, ' +
        'usr.usr_nome_txt as usr_nome, ' +
        'clt.clt_nome_txt as nome, ' +
        'clt.clt_cpf_cnpj_txt as cpf_cnpj'
      ];
      this.clienteRepositoty.createQueryBuilder('clt').select(campos)
        .innerJoin('clt.usuario', 'usr')
        .innerJoin('clt.corretora', 'cta')
        .where('cta.cta_id_int = :cta_id', { cta_id: cta_id })
        .andWhere('LOWER(clt.clt_nome_txt) like LOWER(:texto)', { texto: `%${texto}%` })
        .orderBy('clt.clt_nome_txt', 'ASC')
        .execute()
        .then(clientes => {
          resolve(clientes);
        }).catch(reason => {
          reject(reason);
        });
    })
  }

  public alterar(cliente: Cliente): Promise<Cliente> {
    return new Promise((resolve, reject) => {
      this.clienteRepositoty.save(cliente).then(novoCliente => {
        resolve(novoCliente);
      }).catch(reason => {
        reject(reason);
      });
    })
  }

  public excluir(id: number): Promise<DeleteResult> {
    return new Promise((resolve, reject) => {
      this.clienteRepositoty.delete(id).then(deleteResult => {
        resolve(deleteResult);
      }).catch(reason => {
        reject(reason);
      });
    });
  }

  public verificarExistencia(cliente: Cliente): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.clienteRepositoty.find({ where: { cta_id: cliente.cta_id, cpf_cnpj: cliente.cpf_cnpj, nome: cliente.nome } }).then(clientes => {
        if (clientes.length != 0) {
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

