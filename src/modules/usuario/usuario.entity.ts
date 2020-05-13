import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { Perfil } from "../perfil/perfil.entity";
import { Contrato } from "../contrato/contrato.entity";
import { Corretora } from "../corretora/corretora.entity";

@Entity()
export class Usuario extends BaseEntity {
  /* COLUNAS */
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 250, nullable: false })
  nome: string;
  @Column({ length: 500, nullable: false })
  email: string;
  @Column({ length: 250, nullable: false, })
  senha: string;
  @Column({ length: 250, nullable: false })
  salt: string;
  /* RELACIONAMENTOS */
  @ManyToOne(type => Perfil, perfil => perfil.usuarios, { eager: false })
  perfil: Perfil;
  @OneToMany(type => Contrato, contrato => contrato.usuario, { eager: true })
  contratos: Contrato[]
  @ManyToOne(type => Corretora, corretora => corretora.usuarios, { eager: false })
  corretora: Corretora;
}