import { Corretora } from './../corretora/corretora.entity';
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import { Comissao } from "../comissao/comissao.entity";

@Entity('tipo_comissao_tcm')
export class TipoComissao extends BaseEntity {
  /* CAMPOS */
  @PrimaryGeneratedColumn({ name: 'tcm_id_int' })
  id: number;
  @Column({ name: 'tcm_nome_txt', length: 50, nullable: false })
  nome: string;
  @Column({ name: 'tcm_percentual_associado_num', nullable: false })
  percentual_associado: number;
  @Column({ name: 'cta_id_int', nullable: false })
  cta_id: number;
  /* RELACIONAMENTOS */
  @ManyToOne(type => Corretora, corretora => corretora.tiposComissao)
  @JoinColumn({ name: 'cta_id_int' })
  corretora: Corretora;
  @OneToMany(type => Comissao, comissao => comissao.tipoComissao)
  comissoes: Comissao[];



}