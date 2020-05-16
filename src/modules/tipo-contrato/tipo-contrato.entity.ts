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
  @OneToMany(type => Contrato, contrato => contrato.tipoContrato, { eager: true })
  contratos: Contrato[]
  @OneToMany(type => ClasseContrato, classeContrato => classeContrato.tiposContratos, { eager: true })
  classeContrato: ClasseContrato;
  @ManyToOne(type => Corretora, corretora => corretora.tiposContrato, { eager: false })
  @JoinColumn({ name: 'ctr_id_int' })
  corretora: Corretora
}