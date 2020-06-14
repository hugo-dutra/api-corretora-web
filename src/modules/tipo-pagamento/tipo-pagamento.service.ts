import { TipoPagamento } from './tipo-pagamento.entity';
import { TipoPagamentoRepository } from './tipo-pagamento.repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult } from 'typeorm';

@Injectable()
export class TipoPagamentoService {
  constructor(@InjectRepository(TipoPagamentoRepository) private tipoPagamentoRepository: TipoPagamentoRepository) { }

  public inserir(tipoPagamento: TipoPagamento): Promise<TipoPagamento> {
    return new Promise((resolve, reject) => {
      this.verificarExistencia(tipoPagamento).then(existe => {
        if (!existe) {
          this.tipoPagamentoRepository.save(tipoPagamento).then(tipoPagamento => {
            resolve(tipoPagamento);
          })
        } else {
          resolve(null);
        }
      }).catch(reason => {
        reject(reason);
      })
    });
  }

  public listar(cta_id: number): Promise<TipoPagamento[]> {
    return new Promise((resolve, reject) => {
      this.tipoPagamentoRepository.find({ where: { cta_id: cta_id } }).then(tiposPagamento => {
        resolve(tiposPagamento);
      }).catch(reason => {
        reject(reason);
      });
    });
  }

  public alterar(tipoPagamento: TipoPagamento): Promise<TipoPagamento> {
    return new Promise((resolve, reject) => {
      this.verificarExistencia(tipoPagamento).then(existe => {
        if (!existe) {
          this.tipoPagamentoRepository.save(tipoPagamento).then(tipoPagamento => {
            resolve(tipoPagamento);
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

  public excluir(id: number): Promise<DeleteResult> {
    return new Promise((resolve, reject) => {
      this.tipoPagamentoRepository.delete(id).then(deleteResult => {
        resolve(deleteResult);
      }).catch(reason => {
        reject(reason);
      })
    });
  }

  public verificarExistencia(tipoPagamento: TipoPagamento): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.tipoPagamentoRepository.find({ where: { nome: tipoPagamento.nome, cta_id: tipoPagamento.cta_id } }).then(tiposPagamentos => {
        if (tiposPagamentos.length != 0) {
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
