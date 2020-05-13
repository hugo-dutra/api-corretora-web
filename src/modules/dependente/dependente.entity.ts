import { Beneficiario } from '../beneficiario/beneficiario.entity';

import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

@Entity()
export class Dependente extends BaseEntity {
  /* CAMPOS */
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 500, nullable: false })
  nome: string;
  @Column()
  beneficiarioId: number;
  /* RELACIONAMENTOS */
  @ManyToOne(type => Beneficiario, beneficiario => beneficiario.dependentes, { eager: false })
  beneficiario: Beneficiario;
}