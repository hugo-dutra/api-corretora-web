import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { Contrato } from "../contrato/contrato.entity";
import { ClasseContrato } from "../classe-contrato/classe-contrato.entity";
import { Corretora } from "../corretora/corretora.entity";

@Entity()
export class TipoContrato extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 250, nullable: false })
  nome: string;
  @OneToMany(type => Contrato, contrato => contrato.tipoContrato, { eager: true })
  contratos: Contrato[]
  @OneToMany(type => ClasseContrato, classeContrato => classeContrato.tiposContratos, { eager: true })
  classeContrato: ClasseContrato;
  @ManyToOne(type => Corretora, corretora => corretora.tiposContrato, { eager: false })
  corretora: Corretora
}