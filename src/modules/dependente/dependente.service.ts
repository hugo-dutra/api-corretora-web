import { DependenteRepository } from './dependente.repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Dependente } from './dependente.entity';
import { Beneficiario } from '../beneficiario/beneficiario.entity';
import { DeleteResult } from 'typeorm';

@Injectable()
export class DependenteService {
  constructor(@InjectRepository(DependenteRepository) private dependenteRepository: DependenteRepository) { }

  public inserir(dependente: Dependente): Promise<Dependente> {
    return new Promise((resolve, reject) => {
      this.dependenteRepository.save(dependente).then(novoDependente => {
        resolve(dependente);
      }).catch(reason => {
        reject(reason);
      });
    });
  }

  public listar(bnf_id: number): Promise<Dependente[]> {
    return new Promise((resolve, reject) => {
      this.dependenteRepository.find({ where: { bnf_id: bnf_id } }).then(beneficiarios => {
        resolve(beneficiarios);
      }).catch(reason => {
        reject(reason);
      });
    });
  }

  public alterar(dependente: Dependente): Promise<Dependente> {
    return new Promise((resolve, reject) => {
      this.dependenteRepository.save(dependente).then(dependenteAlterado => {
        resolve(dependenteAlterado)
      }).catch(reason => {
        reject(reason);
      });
    });
  }

  public excluir(id: number): Promise<DeleteResult> {
    return new Promise((resolve, reject) => {
      this.dependenteRepository.delete(id).then(deleteResult => {
        resolve(deleteResult);
      }).catch(reason => {
        reject(reason);
      })
    })
  }




}
