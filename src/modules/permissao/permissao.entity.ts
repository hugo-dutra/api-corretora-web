import { PerfilPermissao } from './../perfil-permissao/perfil-permissao.entity';
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, OneToMany } from "typeorm";

@Entity('permissao_prm')
export class Permissao extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'prm_id_int' })
  id: number;
  @Column({ length: 250, nullable: false, name: 'prm_nome_txt' })
  nome: string;
  @OneToMany(type => PerfilPermissao, perfilPermissao => perfilPermissao.permissao, { eager: false })
  perfisPermissoes: PerfilPermissao[];
}