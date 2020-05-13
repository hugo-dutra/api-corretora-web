import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { Corretora } from "../corretora/corretora.entity";
import { Contrato } from "../contrato/contrato.entity";

@Entity()
export class Gerenciadora extends BaseEntity {
  /* CAMPOS */
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 250, nullable: false })
  nome: string;
  /* RELACIONAMENTOS */
  @ManyToOne(type => Corretora, corretora => corretora.gerenciadoras, { eager: false })
  corretora: Corretora;
  @OneToMany(type => Contrato, contrato => contrato.gerenciadora, { eager: true })
  contratos: Contrato[]
}
