import { Beneficiario } from './../beneficiario/beneficiario.entity';
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";

@Entity('telefone_beneficiario_tbn')
export class TelefoneBeneficiario extends BaseEntity {
  /* CAMPOS */
  @PrimaryGeneratedColumn({ name: 'tbn_id_int' })
  id: number;
  @Column({ length: 25, nullable: false, name: 'tbn_telefone_txt' })
  telefone: string;
  @Column({ nullable: false, name: 'tbn_whatsapp_bin', default: false })
  whatsapp: Boolean;
  @Column({ name: 'tbn_observacao_txt', nullable: true })
  observacao: string;
  @Column({ name: 'bnf_id_int' })
  bnf_id: number;
  /*RELACIONAMENTOS*/
  @ManyToOne(type => Beneficiario, beneficiario => beneficiario.telefones)
  @JoinColumn({ name: 'bnf_id_int' })
  beneficiario: Beneficiario;
}