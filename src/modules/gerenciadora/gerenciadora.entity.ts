import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from "typeorm";
import { Corretora } from "../corretora/corretora.entity";
import { Contrato } from "../contrato/contrato.entity";

@Entity('gerenciadora_ger')
export class Gerenciadora extends BaseEntity {
  /* CAMPOS */
  @PrimaryGeneratedColumn({ name: 'ger_id_int' })
  id: number;
  @Column({ length: 250, nullable: false, name: 'ger_nome_txt' })
  nome: string;
  /* RELACIONAMENTOS */
  @ManyToOne(type => Corretora, corretora => corretora.gerenciadoras, { eager: false })
  @JoinColumn({ name: 'cta_id_int' })
  corretora: Corretora;
  @OneToMany(type => Contrato, contrato => contrato.gerenciadora, { eager: true })
  contratos: Contrato[]
}
