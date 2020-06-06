import { BeneficiarioRepository } from './beneficiario.repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Beneficiario } from './beneficiario.entity';
import { DeleteResult } from 'typeorm';

@Injectable()
export class BeneficiarioService {
  constructor(@InjectRepository(BeneficiarioRepository) private beneficiarioRepository: BeneficiarioRepository) { }

  public inserir(beneficiario: Beneficiario): Promise<Beneficiario> {
    return new Promise((resolve, reject) => {
      this.beneficiarioRepository.save(beneficiario).then(novoBeneficiario => {
        resolve(novoBeneficiario);
      }).catch(reason => {
        reject(reason);
      });
    });
  }

  public listar(clt_id: number): Promise<Beneficiario[]> {
    return new Promise((resolve, reject) => {
      this.beneficiarioRepository.find({ where: { clt_id: clt_id } }).then(beneficiarios => {
        resolve(beneficiarios);
      }).catch(reason => {
        reject(reason);
      });
    })
  }

  public alterar(beneficiario: Beneficiario): Promise<Beneficiario> {
    return new Promise((resolve, reject) => {
      this.beneficiarioRepository.save(beneficiario).then(novoBeneficiario => {
        resolve(novoBeneficiario);
      }).catch(reason => {
        reject(reason);
      });
    });
  }

  public excluir(id: number): Promise<DeleteResult> {
    return new Promise((resolve, reject) => {
      this.beneficiarioRepository.delete(id).then(deleteResult => {
        resolve(deleteResult);
      }).catch(reason => {
        reject(reason);
      });
    })
  }


}
