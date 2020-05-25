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
  @Column({ name: 'pac_data_vendimento_dte' })
  data_vendimento: Date;
  /* RELACIONAMENTOS */
  @ManyToOne(type => Contrato, contrato => contrato.parcelasContrato)
  @JoinColumn({ name: 'ctr_id_int' })
  contrato: Contrato;
  @ManyToOne(type => TipoPagamento, tipoPagamento => tipoPagamento.parcelasContrato)
  @JoinColumn({ name: 'tip_id_int' })
  tipoPagamento: TipoPagamento;
}