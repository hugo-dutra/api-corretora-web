import { Administradora } from './../administradora/administradora.entity';
import { ParcelaContrato } from './../parcela-contrato/parcela-contrato.entity';
import { ClasseContrato } from './../classe-contrato/classe-contrato.entity';
import { Gerenciadora } from './../gerenciadora/gerenciadora.entity';
import { ModalidadePlano } from './../modalidade-plano/modalidade-plano.entity';
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from "typeorm";
import { Usuario } from "../usuario/usuario.entity";
import { Cliente } from '../cliente/cliente.entity';
import { TipoContrato } from '../tipo-contrato/tipo-contrato.entity';

@Entity('contrato_ctr')
export class Contrato extends BaseEntity {
  /* CAMPOS */
  @PrimaryGeneratedColumn({ name: 'ctr_id_int' })
  id: number;
  @Column({ name: 'ctr_valor_num' })
  valor: number;
  @Column({ name: 'ctr_numero_contrato_txt' })
  ctr_numero_contrato: string;
  @Column({ name: 'ctr_inicio_vigencia_dte' })
  ctr_inicio_vigencia: Date;
  @Column({ name: 'ctr_valor_desconto_num' })
  ctr_valor_desconto: number;
  @Column({ name: 'ctr_data_assinatura_contrato_dte' })
  ctr_data_assinatura_contrato: Date;
  /* RELACIONAMENTOS */
  @ManyToOne(type => Usuario, usuario => usuario.contratos, { eager: false })
  @JoinColumn({ name: 'usr_id_int' })
  usuario: Usuario;
  @ManyToOne(Type => ModalidadePlano, modalidadePlano => modalidadePlano.contratos, { eager: false })
  @JoinColumn({ name: 'mop_id_int' })
  modalidadePlano: ModalidadePlano;
  @ManyToOne(type => Gerenciadora, gerenciadora => gerenciadora.contratos, { eager: false })
  @JoinColumn({ name: 'ger_id_int' })
  gerenciadora: Gerenciadora;
  @ManyToOne(type => Cliente, cliente => cliente.contratos, { eager: false })
  @JoinColumn({ name: 'clt_id_int' })
  cliente: Cliente;
  @ManyToOne(type => TipoContrato, tipoContrato => tipoContrato.contratos, { eager: false })
  @JoinColumn({ name: 'tco_id_int' })
  tipoContrato: TipoContrato;
  @ManyToOne(type => ClasseContrato, classeContrato => classeContrato.contratos, { eager: false })
  @JoinColumn({ name: 'clc_id_int' })
  classeContrato: ClasseContrato;
  @ManyToOne(type => Administradora, administradora => administradora.contratos, { eager: false })
  @JoinColumn({ name: 'adm_id_int' })
  administradora: Administradora;
  @OneToMany(type => ParcelaContrato, parcelaContrato => parcelaContrato.contrato, { eager: true })
  @JoinColumn({ name: 'pac_id_int' })
  parcelasContrato: ParcelaContrato[];

}