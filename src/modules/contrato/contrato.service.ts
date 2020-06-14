import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ContratoRepository } from './contrato.repositoty';
import { Contrato } from './contrato.entity';
import { DeleteResult } from 'typeorm';

@Injectable()
export class ContratoService {
  constructor(@InjectRepository(ContratoRepository) private contratoRepository: ContratoRepository) { }

  public inserir(contrato: Contrato): Promise<Contrato> {
    return new Promise((resolve, reject) => {
      this.contratoRepository.save(contrato).then(novoContrato => {
        resolve(novoContrato);
      }).catch(reason => {
        reject(reason);
      });
    });
  }

  public listarPorCorretoraId(cta_id: number): Promise<Contrato[]> {
    return new Promise((resolve, reject) => {
      const campos = [
        'ctr.ctr_id_int as id', 'ctr.ctr_valor_num  as valor', 'usr.usr_id_int as usr_id',
        'usr.usr_nome_txt as usr_nome', 'mop.mop_id_int as mop_id', 'mop.mop_nome_txt as mop_nome',
        'clt.clt_id_int as clt_id', 'clt.clt_nome_txt as clt_nome', 'tco.tco_id_int as tco_id',
        'tco.tco_nome_txt as tco_nome', 'clc.clc_id_int as clc_id', 'clc.clc_nome_txt as clc_nome',
        'adm.adm_id_int as adm_id', 'adm.adm_nome_txt as adm_nome', 'ctr_numero_contrato_txt as numero_contrato',
        'ctr_inicio_vigencia_dte as inicio_vigencia', 'ctr_valor_desconto_num as valor_desconto', 'ctr_data_assinatura_contrato_dte as data_assinatura_contrato'
      ];
      this.contratoRepository.createQueryBuilder('ctr')
        .select(campos)
        .innerJoin('ctr.usuario', 'usr')
        .innerJoin('ctr.modalidadePlano', 'mop')
        .innerJoin('ctr.cliente', 'clt')
        .innerJoin('ctr.tipoContrato', 'tco')
        .innerJoin('ctr.classeContrato', 'clc')
        .innerJoin('ctr.administradora', 'adm')
        .innerJoin('usr.corretora', 'cta')
        .where('cta.cta_id_int = :cta_id', { cta_id: cta_id })
        .execute()
        .then(contratos => {
          resolve(contratos);
        }).catch(reason => {
          reject(reason);
        });
    });
  }

  public listarPorUsuarioId(usr_id: number): Promise<Contrato[]> {
    return new Promise((resolve, reject) => {
      const campos = [
        'ctr.ctr_id_int as id', 'ctr.ctr_valor_num  as valor', 'usr.usr_id_int as usr_id',
        'usr.usr_nome_txt as usr_nome', 'mop.mop_id_int as mop_id', 'mop.mop_nome_txt as mop_nome',
        'clt.clt_id_int as clt_id', 'clt.clt_nome_txt as clt_nome', 'tco.tco_id_int as tco_id',
        'tco.tco_nome_txt as tco_nome', 'clc.clc_id_int as clc_id', 'clc.clc_nome_txt as clc_nome',
        'adm.adm_id_int as adm_id', 'adm.adm_nome_txt as adm_nome', 'ctr_numero_contrato_txt as numero_contrato',
        'ctr_inicio_vigencia_dte as inicio_vigencia', 'ctr_valor_desconto_num as valor_desconto', 'ctr_data_assinatura_contrato_dte as data_assinatura_contrato'
      ];
      this.contratoRepository.createQueryBuilder('ctr')
        .select(campos)
        .innerJoin('ctr.usuario', 'usr')
        .innerJoin('ctr.modalidadePlano', 'mop')
        .innerJoin('ctr.cliente', 'clt')
        .innerJoin('ctr.tipoContrato', 'tco')
        .innerJoin('ctr.classeContrato', 'clc')
        .innerJoin('ctr.administradora', 'adm')
        .innerJoin('usr.corretora', 'cta')
        .where('usr.usr_id_int = :usr_id', { usr_id: usr_id })
        .execute()
        .then(contratos => {
          resolve(contratos);
        }).catch(reason => {
          reject(reason);
        });
    });
  }

  public alterar(contrato: Contrato): Promise<Contrato> {
    return new Promise((resolve, reject) => {
      this.contratoRepository.save(contrato).then(novoContrato => {
        resolve(novoContrato);
      }).catch(reason => {
        reject(reason);
      });
    });
  }

  public excluir(ctr_id: any): Promise<DeleteResult> {
    const id = ctr_id['id']
    return new Promise((resolve, reject) => {
      this.contratoRepository.delete(id).then(deleteResult => {
        resolve(deleteResult);
      }).catch(reason => {
        reject(reason);
      });
    });
  }

}

