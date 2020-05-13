import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { Operadora } from "../operadora/operadora.entity";
import { Contrato } from "../contrato/contrato.entity";

@Entity()
export class ModalidadePlano extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 250, nullable: false })
  nome: string
  @ManyToOne(type => Operadora, operadora => operadora.modalidadesPlano, { eager: false })
  operadora: Operadora
  @OneToMany(type => Contrato, contrato => contrato.modalidadePlano, { eager: true })
  contratos: Contrato[]
}