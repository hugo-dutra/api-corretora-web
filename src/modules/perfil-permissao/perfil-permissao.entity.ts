import { Perfil } from './../perfil/perfil.entity';
import { BaseEntity, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Permissao } from '../permissao/permissao.entity';

@Entity('perfil_permissao_pep')
export class PerfilPermissao extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'pep_id_int' })
  id: number;
  @ManyToOne(type => Permissao, permissao => permissao.perfisPermissoes)
  @JoinColumn({ name: 'prm_id_int' })
  permissao: Permissao;
  @ManyToOne(type => Perfil, perfil => perfil => perfil.perfisPermissoes)
  @JoinColumn({ name: 'per_id_int' })
  perfil: Perfil;
}