import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from "typeorm";
import { Cliente } from "../cliente/cliente.entity";

@Entity('telefone_tcl')
export class TelefoneCliente extends BaseEntity {
  /* CAMPOS */
  @PrimaryGeneratedColumn({ name: 'tcl_id_int' })
  id: number;
  @Column({ length: 25, nullable: false, name: 'tcl_telefone_txt' })
  telefone: string;
  @Column({ nullable: false, name: 'tcl_whatsapp_bin', default: false })
  whatsapp: Boolean;
  @Column({ name: 'tcl_observacao_txt', nullable: true })
  observacao: string;
  @Column({ name: 'clt_id_int' })
  clt_id: number;
  /* RELACIONAMENTOS */
  @ManyToOne(type => Cliente, cliente => cliente.telefones, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'clt_id_int' })
  cliente: Cliente;
}