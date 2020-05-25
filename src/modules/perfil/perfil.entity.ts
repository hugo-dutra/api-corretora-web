import { PerfilPermissao } from './../perfil-permissao/perfil-permissao.entity';
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinTable, JoinColumn } from "typeorm";
import { Usuario } from "../usuario/usuario.entity";
import { Permissao } from "../permissao/permissao.entity";

@Entity('perfil_per')
export class Perfil extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'per_id_int' })
  id: number;
  @Column({ length: 250, nullable: false, name: 'per_nome_txt' })
  nome: string;
  @OneToMany(type => Usuario, usuario => usuario.perfil)
  usuarios: Usuario[];
  @OneToMany(type => PerfilPermissao, perfilPermissao => perfilPermissao.perfil)
  perfisPermissoes: PerfilPermissao[];



}