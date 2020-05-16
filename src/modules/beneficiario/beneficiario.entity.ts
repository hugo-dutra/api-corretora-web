import { Cliente } from '../cliente/cliente.entity';
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from "typeorm";
import { Dependente } from '../dependente/dependente.entity';

@Entity('beneficiario_bnf')
export class Beneficiario extends BaseEntity {
  /* CAMPOS */
  @PrimaryGeneratedColumn({ name: 'bnf_id_int' })
  id: number;
  @Column({ length: 500, nullable: false, name: 'bnf_nome_txt' })
  nome: string;
  /* RELACIONAMENTOS */
  @ManyToOne(type => Cliente, cliente => cliente.beneficiarios, { eager: false })
  @JoinColumn({ name: 'clt_id_int' })
  cliente: Cliente;
  @OneToMany(type => Dependente, dependente => dependente.beneficiario, { eager: true })
  dependentes: Dependente[];
}