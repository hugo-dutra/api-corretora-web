import { TipoPagamento } from './../tipo-pagamento/tipo-pagamento.entity';
import { ClasseContrato } from './../classe-contrato/classe-contrato.entity';
import { TipoContrato } from './../tipo-contrato/tipo-contrato.entity';
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Cliente } from "../cliente/cliente.entity";
import { Operadora } from "../operadora/operadora.entity";
import { Gerenciadora } from "../gerenciadora/gerenciadora.entity";
import { Usuario } from '../usuario/usuario.entity';
import { Administradora } from '../administradora/administradora.entity';

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
  @OneToMany(type => Cliente, cliente => cliente.corretora, { eager: true })
  clientes: Cliente[]
  @OneToMany(type => Operadora, operadora => operadora.corretora, { eager: true })
  operadoras: Operadora[]
  @OneToMany(type => Gerenciadora, gerenciadora => gerenciadora.corretora, { eager: true })
  gerenciadoras: Gerenciadora[];
  @OneToMany(type => TipoContrato, tipoContrato => tipoContrato.corretora, { eager: true })
  tiposContrato: TipoContrato[]
  @OneToMany(type => ClasseContrato, classeContrato => classeContrato.corretora, { eager: true })
  classesContrato: ClasseContrato[]
  @OneToMany(type => TipoPagamento, tipoPagamento => tipoPagamento.corretora, { eager: true })
  tiposPagamento: TipoPagamento[]
  @OneToMany(type => Usuario, usuario => usuario.corretora, { eager: true })
  usuarios: Usuario[];
  @OneToMany(type => Administradora, administradora => administradora.corretora, { eager: true })
  administradoras: Administradora[];

}