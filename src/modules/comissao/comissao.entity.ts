import { TipoPagamento } from './../tipo-pagamento/tipo-pagamento.entity';
import { TipoComissao } from './../tipo-comissao/tipo-comissao.entity';
import { BaseEntity, Entity, EntityRepository, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Contrato } from "../contrato/contrato.entity";

@Entity('comissao_cms')
export class Comissao extends BaseEntity {
  /* CAMPOS */
  @PrimaryGeneratedColumn({ name: 'cms_id_int' })
  id: number;
  @Column({ name: 'cms_valor_num', nullable: false })
  valor: number;
  @Column({ name: 'cms_data_faturamento_dte' })
  data_faturamento: Date;
  @Column({ name: 'ctr_id_int' })
  ctr_id: number;
  @Column({ name: 'tcm_id_int' })
  tcm_id: number;
  @Column({ name: 'tip_id_int' })
  tip_id: number;
  /* RELACIONAMENTOS */
  @ManyToOne(type => Contrato, contrato => contrato.comissoes)
  @JoinColumn({ name: 'ctr_id_int' })
  contrato: Contrato;
  @ManyToOne(type => TipoComissao, tipoComissao => tipoComissao.comissoes)
  @JoinColumn({ name: 'tcm_id_int' })
  tipoComissao: TipoComissao;
  @ManyToOne(type => TipoPagamento, tipoPagamento => tipoPagamento.comissoes)
  @JoinColumn({ name: 'tip_id_int' })
  tipoPagamento: TipoPagamento;
}