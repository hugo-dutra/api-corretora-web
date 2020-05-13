import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { TipoContrato } from "../tipo-contrato/tipo-contrato.entity";
import { Contrato } from "../contrato/contrato.entity";
import { Corretora } from "../corretora/corretora.entity";

@Entity()
export class ClasseContrato extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 250, nullable: false })
  nome: string;
  @ManyToOne(type => TipoContrato, tipoContrato => tipoContrato.classeContrato, { eager: false })
  tiposContratos: TipoContrato[];
  @OneToMany(type => Contrato, contrato => contrato.classeContrato, { eager: false })
  contratos: Contrato[];
  @ManyToOne(type => Corretora, corretora => corretora.classesContrato, { eager: false })
  corretora: Corretora;

}