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
  /* RELACIONAMENTOS */
  @ManyToOne(type => Contrato, contrato => contrato.comissoes)
  @JoinColumn({ name: 'ctr_id_int' })
  contrato: Contrato;
  @ManyToOne(type => TipoComissao, tipoComissao => tipoComissao.comissoes)
  @JoinColumn({ name: 'tco_id_int' })
  tipoComissao: TipoComissao;
}