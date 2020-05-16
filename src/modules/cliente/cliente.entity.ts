import { Beneficiario } from '../beneficiario/beneficiario.entity';
import { BaseEntity, PrimaryGeneratedColumn, Column, Entity, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import { Telefone } from '../telefone/telefone.entity';
import { Corretora } from '../corretora/corretora.entity';
import { Contrato } from '../contrato/contrato.entity';
import { Usuario } from '../usuario/usuario.entity';


@Entity('cliente_clt')
export class Cliente extends BaseEntity {
  /* CAMPOS */
  @PrimaryGeneratedColumn({ name: 'clt_id_int' })
  id: number;
  @Column({ name: 'clt_nome_txt', nullable: false, length: 500 })
  nome: string;
  @Column({ name: 'clt_cep_txt', length: 25 })
  cep: string;
  @Column({ name: 'clt_endereco_txt', length: 500 })
  endereco: string;
  @Column({ name: 'clt_cidade_txt', length: 250 })
  cidade: string;
  @Column({ name: 'clt_uf_txt', length: 5 })
  uf: string;
  @Column({ name: 'clt_email_txt', length: 500 })
  email: string;
  @Column({ name: 'clt_cpf_cnpj_txt', length: 50 })
  clt_cpf_cnpj: string;
  /* RELACIONAMENTOS */
  @ManyToOne(type => Usuario, usuario => usuario.clientes, { eager: false })
  @JoinColumn({ name: 'usr_id_int' })
  usuario: Usuario;
  @OneToMany(type => Beneficiario, beneficiario => beneficiario.cliente, { eager: true })
  beneficiarios: Beneficiario[]
  @OneToMany(type => Telefone, telefone => telefone.cliente, { eager: true })
  telefones: Telefone[];
  @OneToMany(type => Contrato, contrato => contrato.cliente, { eager: true })
  contratos: Contrato[];
  @ManyToOne(type => Corretora, corretora => corretora.clientes, { eager: false })
  @JoinColumn({ name: 'cta_id_int' })
  corretora: Corretora;
}