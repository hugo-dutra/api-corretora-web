import { ModalidadePlano } from './../modalidade-plano/modalidade-plano.entity';
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from "typeorm";
import { Corretora } from "../corretora/corretora.entity";

@Entity('operadora_ope')
export class Operadora extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'ope_id_int' })
  id: number;
  @Column({ length: 250, nullable: false, name: 'ope_nome_txt' })
  nome: string;
  @ManyToOne(type => Corretora, corretora => corretora.operadoras, { eager: false })
  @JoinColumn({ name: 'cta_id_int' })
  corretora: Corretora
  @OneToMany(type => ModalidadePlano, modalidadePlano => modalidadePlano.operadora, { eager: true })
  modalidadesPlano: ModalidadePlano[]
}