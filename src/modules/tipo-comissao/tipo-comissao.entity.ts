import { Corretora } from './../corretora/corretora.entity';
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import { Comissao } from "../comissao/comissao.entity";

@Entity('tipo_comissao_tco')
export class TipoComissao extends BaseEntity {
  /* CAMPOS */
  @PrimaryGeneratedColumn({ name: 'tco_id_int' })
  id: number;
  @Column({ name: 'tco_nome_txt', length: 50, nullable: false })
  nome: string;
  @Column({ name: 'tco_percentual_assocido_num', nullable: false })
  percentual_assocido: number;
  /* RELACIONAMENTOS */
  @OneToMany(type => Comissao, comissao => comissao.tipoComissao)
  comissoes: Comissao[];
  @ManyToOne(type => Corretora, corretora => corretora.tiposComissao)
  @JoinColumn({ name: 'cta_id_int' })
  corretora: Corretora;


}