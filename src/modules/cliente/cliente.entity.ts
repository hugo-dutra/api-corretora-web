import { Beneficiario } from '../beneficiario/beneficiario.entity';
import { BaseEntity, PrimaryGeneratedColumn, Column, Entity, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import { TelefoneCliente } from '../telefone-cliente/telefone-cliente.entity';
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
  cpf_cnpj: string;
  @Column({ name: 'clt_pessoa_fisica', default: true })
  pessoa_fisica: boolean;
  @Column({ name: 'usr_id_int' })
  usr_id: number;
  @Column({ name: 'cta_id_int' })
  cta_id: number;
  /* RELACIONAMENTOS */
  @ManyToOne(type => Usuario, usuario => usuario.clientes)
  @JoinColumn({ name: 'usr_id_int' })
  usuario: Usuario;
  @ManyToOne(type => Corretora, corretora => corretora.clientes)
  @JoinColumn({ name: 'cta_id_int' })
  corretora: Corretora;
  @OneToMany(type => Beneficiario, beneficiario => beneficiario.cliente)
  beneficiarios: Beneficiario[]
  @OneToMany(type => TelefoneCliente, telefone => telefone.cliente)
  telefones: TelefoneCliente[];
  @OneToMany(type => Contrato, contrato => contrato.cliente)
  contratos: Contrato[];

}