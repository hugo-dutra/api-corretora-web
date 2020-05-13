import { ProprietarioTelefone } from './../proprietario-telefone/proprietario-telefone.entity';
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { Cliente } from "../cliente/cliente.entity";

@Entity()
export class Telefone extends BaseEntity {
  /* CAMPOS */
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 25, nullable: false })
  telefone: string;
  @Column()
  clienteId: number;
  @Column({ nullable: false })
  proprietarioTelefoneId: number;
  /* RELACIONAMENTOS */
  @ManyToOne(type => Cliente, cliente => cliente.telefones, { eager: false })
  cliente: Cliente;
  @ManyToOne(type => ProprietarioTelefone, proprietarioTelefone => proprietarioTelefone.telefones, { eager: false })
  proprietarioTelefone: ProprietarioTelefone;
}