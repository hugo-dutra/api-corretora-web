import { TipoPagamento } from './../tipo-pagamento/tipo-pagamento.entity';
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { Contrato } from "../contrato/contrato.entity";

@Entity()
export class ParcelaContrato extends BaseEntity {
  /* CAMPOS */
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  valor: number;
  /* RELACIONAMENTOS */
  @ManyToOne(type => Contrato, contrato => contrato.parcelasContrato, { eager: false })
  contrato: Contrato;
  @ManyToOne(type => TipoPagamento, tipoPagamento => tipoPagamento.parcelasContrato, { eager: false })
  tipoPagamento: TipoPagamento;
}