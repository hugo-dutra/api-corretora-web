import { ParcelaContrato } from './../parcela-contrato/parcela-contrato.entity';
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, ManyToOne } from "typeorm";
import { Corretora } from '../corretora/corretora.entity';

@Entity()
export class TipoPagamento extends BaseEntity {
  /* CAMPOS */
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 250, nullable: false })
  nome: string;
  /* RELACIONAMENTOS */
  @OneToMany(type => ParcelaContrato, parcelaContrato => parcelaContrato.tipoPagamento, { eager: true })
  parcelasContrato: ParcelaContrato[]
  @ManyToOne(type => Corretora, corretora => corretora.tiposPagamento, { eager: false })
  corretora: Corretora;
}