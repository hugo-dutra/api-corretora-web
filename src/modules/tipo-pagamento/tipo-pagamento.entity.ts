import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, ManyToOne, JoinColumn } from "typeorm";
import { Corretora } from '../corretora/corretora.entity';
import { Comissao } from "../comissao/comissao.entity";

@Entity('tipo_pagamento_tip')
export class TipoPagamento extends BaseEntity {
  /* CAMPOS */
  @PrimaryGeneratedColumn({ name: 'tip_id_int' })
  id: number;
  @Column({ length: 250, nullable: false, name: 'tip_nome_txt' })
  nome: string;
  @Column({ nullable: false, name: 'cta_id_int' })
  cta_id: number;
  /* RELACIONAMENTOS */
  @ManyToOne(type => Corretora, corretora => corretora.tiposPagamento)
  @JoinColumn({ name: 'cta_id_int' })
  corretora: Corretora;
  @OneToMany(type => Comissao, comissao => comissao.tipoPagamento)
  comissoes: Comissao[];

}