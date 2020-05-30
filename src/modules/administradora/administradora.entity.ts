import { Contrato } from './../contrato/contrato.entity';
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { Corretora } from "../corretora/corretora.entity";

@Entity('administradora_adm')
export class Administradora extends BaseEntity {
  /* CAMPOS */
  @PrimaryGeneratedColumn({ name: 'adm_id_int' })
  id: number;
  @Column({ name: 'adm_nome_txt', length: 250, nullable: false })
  nome: string;
  @Column({ name: 'cta_id_int', nullable: false })
  cta_id: string;
  /* RELACIONAMENTOS */
  @ManyToOne(type => Corretora, corretora => corretora.administradoras)
  @JoinColumn({ name: 'cta_id_int' })
  corretora: Corretora;
  @OneToMany(type => Contrato, contrato => contrato.administradora)
  contratos: Contrato[];

}