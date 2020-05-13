import { Cliente } from '../cliente/cliente.entity';
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { Dependente } from '../dependente/dependente.entity';

@Entity()
export class Beneficiario extends BaseEntity {
  /* CAMPOS */
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 500, nullable: false })
  nome: string;
  @Column()
  clienteId: number;
  /* RELACIONAMENTOS */
  @ManyToOne(type => Cliente, cliente => cliente.beneficiarios, { eager: false })
  cliente: Cliente;
  @OneToMany(type => Dependente, dependente => dependente.beneficiario, { eager: true })
  dependentes: Dependente[];
}