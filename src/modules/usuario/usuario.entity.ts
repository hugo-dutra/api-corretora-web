import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from "typeorm";
import { Perfil } from "../perfil/perfil.entity";
import { Contrato } from "../contrato/contrato.entity";
import { Corretora } from "../corretora/corretora.entity";
import { Cliente } from "../cliente/cliente.entity";

@Entity('usuario_usr')
export class Usuario extends BaseEntity {
  /* COLUNAS */
  @PrimaryGeneratedColumn({ name: 'usr_id_int' })
  id: number;
  @Column({ length: 250, nullable: false, name: 'usr_nome_txt' })
  nome: string;
  @Column({ length: 500, nullable: false, name: 'usr_email_txt' })
  email: string;
  @Column({ length: 250, nullable: false, name: 'usr_senha_txt' })
  senha: string;
  @Column({ length: 250, nullable: false, name: 'usr_salt_txt' })
  salt: string;
  @Column({ nullable: false, name: 'per_id_int' })
  per_id: number;
  @Column({ nullable: false, name: 'cta_id_int' })
  cta_id: number;
  /* RELACIONAMENTOS */
  @ManyToOne(type => Perfil, perfil => perfil.usuarios)
  @JoinColumn({ name: 'per_id_int' })
  perfil: Perfil;
  @ManyToOne(type => Corretora, corretora => corretora.usuarios)
  @JoinColumn({ name: 'cta_id_int' })
  corretora: Corretora;
  @OneToMany(type => Contrato, contrato => contrato.usuario)
  contratos: Contrato[]
  @OneToMany(type => Cliente, cliente => cliente.usuario)
  clientes: Cliente[];

}