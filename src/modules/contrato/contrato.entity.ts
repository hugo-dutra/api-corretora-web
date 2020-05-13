import { ParcelaContrato } from './../parcela-contrato/parcela-contrato.entity';
import { ClasseContrato } from './../classe-contrato/classe-contrato.entity';
import { Gerenciadora } from './../gerenciadora/gerenciadora.entity';
import { ModalidadePlano } from './../modalidade-plano/modalidade-plano.entity';
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { Usuario } from "../usuario/usuario.entity";
import { Cliente } from '../cliente/cliente.entity';
import { TipoContrato } from '../tipo-contrato/tipo-contrato.entity';

@Entity()
export class Contrato extends BaseEntity {
  /* CAMPOS */
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  valor: number;
  /* RELACIONAMENTOS */
  @ManyToOne(type => Usuario, usuario => usuario.contratos, { eager: false })
  usuario: Usuario;
  @ManyToOne(Type => ModalidadePlano, modalidadePlano => modalidadePlano.contratos, { eager: false })
  modalidadePlano: ModalidadePlano
  @ManyToOne(type => Gerenciadora, gerenciadora => gerenciadora.contratos, { eager: false })
  gerenciadora: Gerenciadora;
  @ManyToOne(type => Cliente, cliente => cliente.contratos, { eager: false })
  cliente: Cliente;
  @ManyToOne(type => TipoContrato, tipoContrato => tipoContrato.contratos, { eager: false })
  tipoContrato: TipoContrato;
  @ManyToOne(type => ClasseContrato, classeContrato => classeContrato.contratos, { eager: false })
  classeContrato: ClasseContrato
  @OneToMany(type => ParcelaContrato, parcelaContrato => parcelaContrato.contrato, { eager: true })
  parcelasContrato: ParcelaContrato[]


}