import { TipoComissao } from './../tipo-comissao/tipo-comissao.entity';
import { TipoPagamento } from './../tipo-pagamento/tipo-pagamento.entity';
import { ClasseContrato } from './../classe-contrato/classe-contrato.entity';
import { TipoContrato } from './../tipo-contrato/tipo-contrato.entity';
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Cliente } from "../cliente/cliente.entity";
import { Operadora } from "../operadora/operadora.entity";
import { Usuario } from '../usuario/usuario.entity';
import { Administradora } from '../administradora/administradora.entity';
import { Boleto } from '../boleto/boleto.entity';

@Entity('corretora_cta')
export class Corretora extends BaseEntity {
  /* CAMPOS */
  @PrimaryGeneratedColumn({ name: 'cta_id_int' })
  id: number;
  @Column({ length: 250, nullable: false, name: 'cta_nome_txt' })
  nome: string;
  @Column({ length: 500, name: 'cta_email_txt' })
  email: string
  @Column({ length: 25, name: 'cta_telefone_txt' })
  telefone: string
  /* RELACIONAMENTOS */
  @OneToMany(type => Cliente, cliente => cliente.corretora)
  clientes: Cliente[]
  @OneToMany(type => Operadora, operadora => operadora.corretora)
  operadoras: Operadora[]
  @OneToMany(type => TipoContrato, tipoContrato => tipoContrato.corretora)
  tiposContrato: TipoContrato[]
  @OneToMany(type => ClasseContrato, classeContrato => classeContrato.corretora)
  classesContrato: ClasseContrato[]
  @OneToMany(type => TipoPagamento, tipoPagamento => tipoPagamento.corretora)
  tiposPagamento: TipoPagamento[]
  @OneToMany(type => Usuario, usuario => usuario.corretora)
  usuarios: Usuario[];
  @OneToMany(type => Administradora, administradora => administradora.corretora)
  administradoras: Administradora[];
  @OneToMany(type => TipoComissao, tipoComissao => tipoComissao.corretora)
  tiposComissao: TipoComissao[];
  @OneToMany(type => Boleto, boleto => boleto.corretora)
  boletos: Boleto[];

}