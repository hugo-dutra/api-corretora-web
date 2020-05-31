import { PerfilPermissao } from './../perfil-permissao/perfil-permissao.entity';
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinTable, JoinColumn, ManyToOne } from "typeorm";
import { Usuario } from "../usuario/usuario.entity";
import { Permissao } from "../permissao/permissao.entity";
import { Corretora } from '../corretora/corretora.entity';

@Entity('perfil_per')
export class Perfil extends BaseEntity {
  /* CAMPOS */
  @PrimaryGeneratedColumn({ name: 'per_id_int' })
  id: number;
  @Column({ length: 250, nullable: false, name: 'per_nome_txt' })
  nome: string;
  @Column({ nullable: false, name: 'cta_id_int' })
  cta_id: number;
  /* RELACIONAMENTOS */
  @ManyToOne(type => Corretora, corretora => corretora.perfis)
  @JoinColumn({ name: 'cta_id_int' })
  corretora: Corretora;
  @OneToMany(type => Usuario, usuario => usuario.perfil)
  usuarios: Usuario[];
  @OneToMany(type => PerfilPermissao, perfilPermissao => perfilPermissao.perfil)
  perfisPermissoes: PerfilPermissao[];




}