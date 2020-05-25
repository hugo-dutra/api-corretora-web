import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import { TipoContrato } from "../tipo-contrato/tipo-contrato.entity";
import { Contrato } from "../contrato/contrato.entity";
import { Corretora } from "../corretora/corretora.entity";

@Entity('classe_contrato_clc')
export class ClasseContrato extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'clc_id_int' })
  id: number;
  @Column({ length: 250, nullable: false, name: 'clc_nome_txt' })
  nome: string;
  @ManyToOne(type => TipoContrato, tipoContrato => tipoContrato.classeContrato)
  @JoinColumn({ name: 'tco_id_int' })
  tiposContratos: TipoContrato[];
  @OneToMany(type => Contrato, contrato => contrato.classeContrato)
  contratos: Contrato[];
  @ManyToOne(type => Corretora, corretora => corretora.classesContrato)
  @JoinColumn({ name: 'cta_id_int' })
  corretora: Corretora;

}