import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import { Contrato } from "../contrato/contrato.entity";
import { ClasseContrato } from "../classe-contrato/classe-contrato.entity";
import { Corretora } from "../corretora/corretora.entity";

@Entity('tipo_contrato_tco')
export class TipoContrato extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'tco_id_int' })
  id: number;
  @Column({ length: 250, nullable: false, name: 'tco_nome_txt' })
  nome: string;
  @Column({ nullable: false, name: 'cta_id_int' })
  cta_id: number;
  @OneToMany(type => Contrato, contrato => contrato.tipoContrato)
  contratos: Contrato[]
  @OneToMany(type => ClasseContrato, classeContrato => classeContrato.tiposContratos)
  classeContrato: ClasseContrato;
  @ManyToOne(type => Corretora, corretora => corretora.tiposContrato)
  @JoinColumn({ name: 'cta_id_int' })
  corretora: Corretora
}