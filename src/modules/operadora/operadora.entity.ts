import { ModalidadePlano } from './../modalidade-plano/modalidade-plano.entity';
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { Corretora } from "../corretora/corretora.entity";

@Entity()
export class Operadora extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 250, nullable: false })
  nome: string;
  @ManyToOne(type => Corretora, corretora => corretora.operadoras, { eager: false })
  corretora: Corretora
  @OneToMany(type => ModalidadePlano, modalidadePlano => modalidadePlano.operadora, { eager: true })
  modalidadesPlano: ModalidadePlano[]
}