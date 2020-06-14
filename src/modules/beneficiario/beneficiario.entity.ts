import { Cliente } from '../cliente/cliente.entity';
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from "typeorm";
import { Dependente } from '../dependente/dependente.entity';
import { TelefoneBeneficiario } from '../telefone-beneficiario/telefone-beneficiario.entity';

@Entity('beneficiario_bnf')
export class Beneficiario extends BaseEntity {
  /* CAMPOS */
  @PrimaryGeneratedColumn({ name: 'bnf_id_int' })
  id: number;
  @Column({ length: 500, nullable: false, name: 'bnf_nome_txt' })
  nome: string;
  @Column({ length: 500, name: 'bnf_email_txt' })
  email: string;
  @Column({ nullable: false, name: 'bnf_data_nascimento_dte' })
  data_nascimento: Date;
  @Column({ name: 'bnf_cpf_txt', length: 50 })
  cpf: string;
  @Column({ name: 'clt_id_int' })
  clt_id: number;
  /* RELACIONAMENTOS */
  @ManyToOne(type => Cliente, cliente => cliente.beneficiarios)
  @JoinColumn({ name: 'clt_id_int' })
  cliente: Cliente;
  @OneToMany(type => Dependente, dependente => dependente.beneficiario)
  dependentes: Dependente[];
  @OneToMany(type => TelefoneBeneficiario, telefoneBeneficiario => telefoneBeneficiario.beneficiario)
  telefones: TelefoneBeneficiario[];
}