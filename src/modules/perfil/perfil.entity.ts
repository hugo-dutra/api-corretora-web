import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinTable } from "typeorm";
import { Usuario } from "../usuario/usuario.entity";
import { Permissao } from "../permissao/permissao.entity";

@Entity()
export class Perfil extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 250, nullable: false })
  nome: string;
  @OneToMany(type => Usuario, usuario => usuario.perfil, { eager: true })
  usuarios: Usuario[];

  @ManyToMany(type => Permissao)
  @JoinTable()
  permissoes: Permissao[]

}