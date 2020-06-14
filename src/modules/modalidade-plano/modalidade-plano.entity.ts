import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from "typeorm";
import { Operadora } from "../operadora/operadora.entity";
import { Contrato } from "../contrato/contrato.entity";

@Entity('modalidade_plano_mop')
export class ModalidadePlano extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'mop_id_int' })
  id: number;
  @Column({ length: 250, nullable: false, name: 'mop_nome_txt' })
  nome: string
  @Column({ nullable: false, name: 'ope_id_int' })
  ope_id: number;
  @ManyToOne(type => Operadora, operadora => operadora.modalidadesPlano)
  @JoinColumn({ name: 'ope_id_int' })
  operadora: Operadora
  @OneToMany(type => Contrato, contrato => contrato.modalidadePlano)
  contratos: Contrato[]
}