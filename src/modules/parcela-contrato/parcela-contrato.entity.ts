import { TipoPagamento } from './../tipo-pagamento/tipo-pagamento.entity';
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from "typeorm";
import { Contrato } from "../contrato/contrato.entity";

@Entity('parcela_contrato_pac')
export class ParcelaContrato extends BaseEntity {
  /* CAMPOS */
  @PrimaryGeneratedColumn({ name: 'pac_id_int' })
  id: number;
  @Column({ name: 'pac_valor_num' })
  valor: number;
  /* RELACIONAMENTOS */
  @ManyToOne(type => Contrato, contrato => contrato.parcelasContrato, { eager: false })
  @JoinColumn({ name: 'ctr_id_int' })
  contrato: Contrato;
  @ManyToOne(type => TipoPagamento, tipoPagamento => tipoPagamento.parcelasContrato, { eager: false })
  @JoinColumn({ name: 'tip_id_int' })
  tipoPagamento: TipoPagamento;
}