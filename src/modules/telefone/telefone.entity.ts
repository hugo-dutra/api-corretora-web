import { ProprietarioTelefone } from './../proprietario-telefone/proprietario-telefone.entity';
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from "typeorm";
import { Cliente } from "../cliente/cliente.entity";

@Entity('telefone_tlf')
export class Telefone extends BaseEntity {
  /* CAMPOS */
  @PrimaryGeneratedColumn({ name: 'tlf_id_int' })
  id: number;
  @Column({ length: 25, nullable: false, name: 'tlf_telefone_txt' })
  telefone: string;
  @Column({ nullable: false, name: 'tlf_whatsapp_bin', default: false })
  tlf_whatsapp: Boolean;
  /* RELACIONAMENTOS */
  @ManyToOne(type => Cliente, cliente => cliente.telefones, { eager: false })
  @JoinColumn({ name: 'clt_id_int' })
  cliente: Cliente;
  @ManyToOne(type => ProprietarioTelefone, proprietarioTelefone => proprietarioTelefone.telefones, { eager: false })
  @JoinColumn({ name: 'pte_id_int' })
  proprietarioTelefone: ProprietarioTelefone;
}