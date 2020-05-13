import { BaseEntity, PrimaryGeneratedColumn, Column, Entity, OneToMany } from "typeorm";
import { Telefone } from "../telefone/telefone.entity";

@Entity()
export class ProprietarioTelefone extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 300, nullable: false })
  nome: string;
  @OneToMany(type => Telefone, telefone => telefone.proprietarioTelefone, { eager: true })
  telefones: Telefone[];
}