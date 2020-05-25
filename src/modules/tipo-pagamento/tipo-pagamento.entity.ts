import { ParcelaContrato } from './../parcela-contrato/parcela-contrato.entity';
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, ManyToOne, JoinColumn } from "typeorm";
import { Corretora } from '../corretora/corretora.entity';

@Entity('tipo_pagamento_tip')
export class TipoPagamento extends BaseEntity {
  /* CAMPOS */
  @PrimaryGeneratedColumn({ name: 'tip_id_int' })
  id: number;
  @Column({ length: 250, nullable: false, name: 'tip_nome_txt' })
  nome: string;
  /* RELACIONAMENTOS */
  @OneToMany(type => ParcelaContrato, parcelaContrato => parcelaContrato.tipoPagamento)
  parcelasContrato: ParcelaContrato[]
  @ManyToOne(type => Corretora, corretora => corretora.tiposPagamento)
  @JoinColumn({ name: 'cta_id_int' })
  corretora: Corretora;
}