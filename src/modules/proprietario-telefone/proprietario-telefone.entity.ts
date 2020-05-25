import { BaseEntity, PrimaryGeneratedColumn, Column, Entity, OneToMany } from "typeorm";
import { Telefone } from "../telefone/telefone.entity";

@Entity('proprietario_telefone_pte')
export class ProprietarioTelefone extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'pte_id_int' })
  id: number;
  @Column({ length: 300, nullable: false, name: 'pte_nome_txt' })
  nome: string;
  @OneToMany(type => Telefone, telefone => telefone.proprietarioTelefone)
  telefones: Telefone[];
}