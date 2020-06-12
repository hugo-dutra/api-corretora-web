import { Administradora } from './../administradora/administradora.entity';
import { ClasseContrato } from './../classe-contrato/classe-contrato.entity';
import { ModalidadePlano } from './../modalidade-plano/modalidade-plano.entity';
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from "typeorm";
import { Usuario } from "../usuario/usuario.entity";
import { Cliente } from '../cliente/cliente.entity';
import { TipoContrato } from '../tipo-contrato/tipo-contrato.entity';
import { Comissao } from '../comissao/comissao.entity';

@Entity('contrato_ctr')
export class Contrato extends BaseEntity {
  /* CAMPOS */
  @PrimaryGeneratedColumn({ name: 'ctr_id_int' })
  id: number;
  @Column({ name: 'ctr_valor_num', type: 'float4' })
  valor: number;
  @Column({ name: 'ctr_numero_contrato_txt' })
  numero_contrato: string;
  @Column({ name: 'ctr_inicio_vigencia_dte' })
  inicio_vigencia: Date;
  @Column({ name: 'ctr_valor_desconto_num', type: 'float4' })
  valor_desconto: number;
  @Column({ name: 'ctr_data_assinatura_contrato_dte' })
  data_assinatura_contrato: Date;
  @Column({ name: 'usr_id_int' })
  usr_id: number;
  @Column({ name: 'mop_id_int' })
  mop_id: number;
  @Column({ name: 'clt_id_int' })
  clt_id: number;
  @Column({ name: 'tco_id_int' })
  tco_id: number;
  @Column({ name: 'clc_id_int' })
  clc_id: number;
  @Column({ name: 'adm_id_int' })
  adm_id: number;
  /* RELACIONAMENTOS */
  @ManyToOne(type => Usuario, usuario => usuario.contratos)
  @JoinColumn({ name: 'usr_id_int' })
  usuario: Usuario;
  @ManyToOne(Type => ModalidadePlano, modalidadePlano => modalidadePlano.contratos)
  @JoinColumn({ name: 'mop_id_int' })
  modalidadePlano: ModalidadePlano;
  @ManyToOne(type => Cliente, cliente => cliente.contratos)
  @JoinColumn({ name: 'clt_id_int' })
  cliente: Cliente;
  @ManyToOne(type => TipoContrato, tipoContrato => tipoContrato.contratos)
  @JoinColumn({ name: 'tco_id_int' })
  tipoContrato: TipoContrato;
  @ManyToOne(type => ClasseContrato, classeContrato => classeContrato.contratos)
  @JoinColumn({ name: 'clc_id_int' })
  classeContrato: ClasseContrato;
  @ManyToOne(type => Administradora, administradora => administradora.contratos)
  @JoinColumn({ name: 'adm_id_int' })
  administradora: Administradora;
  @OneToMany(type => Comissao, comissao => comissao.contrato)
  comissoes: Comissao[];
}