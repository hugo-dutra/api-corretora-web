import { Beneficiario } from '../beneficiario/beneficiario.entity';
import { BaseEntity, PrimaryGeneratedColumn, Column, Entity, OneToMany, ManyToOne } from "typeorm";
import { Telefone } from '../telefone/telefone.entity';
import { Corretora } from '../corretora/corretora.entity';
import { Contrato } from '../contrato/contrato.entity';


@Entity()
export class Cliente extends BaseEntity {
  /* CAMPOS */
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  nome: string;
  /* RELACIONAMENTOS */
  @OneToMany(type => Beneficiario, beneficiario => beneficiario.cliente, { eager: true })
  beneficiarios: Beneficiario[]
  @OneToMany(type => Telefone, telefone => telefone.cliente, { eager: true })
  telefones: Telefone[];
  @ManyToOne(type => Corretora, corretora => corretora.clientes, { eager: false })
  corretora: Corretora;
  @OneToMany(type => Contrato, contrato => contrato.cliente, { eager: true })
  contratos: Contrato[];
}