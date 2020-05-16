import { Beneficiario } from '../beneficiario/beneficiario.entity';
import { BaseEntity, PrimaryGeneratedColumn, Column, Entity, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import { Telefone } from '../telefone/telefone.entity';
import { Corretora } from '../corretora/corretora.entity';
import { Contrato } from '../contrato/contrato.entity';


@Entity('cliente_clt')
export class Cliente extends BaseEntity {
  /* CAMPOS */
  @PrimaryGeneratedColumn({ name: 'clt_id_int' })
  id: number;
  @Column({ name: 'clt_nome_txt', nullable: false })
  nome: string;
  /* RELACIONAMENTOS */
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