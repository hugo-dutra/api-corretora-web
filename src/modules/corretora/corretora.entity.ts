import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Cliente } from "../cliente/cliente.entity";
import { Operadora } from "../operadora/operadora.entity";
import { Gerenciadora } from "../gerenciadora/gerenciadora.entity";

@Entity()
export class Corretora extends BaseEntity {
  /* CAMPOS */
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 250, nullable: false })
  nome: string;
  @Column({ length: 500 })
  email: string
  /* RELACIONAMENTOS */
  @OneToMany(type => Cliente, cliente => cliente.corretora, { eager: true })
  clientes: Cliente[]
  @OneToMany(type => Operadora, operadora => operadora.corretora, { eager: true })
  operadoras: Operadora[]
  @OneToMany(type => Gerenciadora, gerenciadora => gerenciadora.corretora, { eager: true })
  gerenciadoras: Gerenciadora[];

}