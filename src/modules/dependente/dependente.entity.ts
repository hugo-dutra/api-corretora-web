import { Beneficiario } from '../beneficiario/beneficiario.entity';
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";

@Entity('dependente_dpd')
export class Dependente extends BaseEntity {
  /* CAMPOS */
  @PrimaryGeneratedColumn({ name: 'dpd_id_int' })
  id: number;
  @Column({ length: 500, nullable: false, name: 'dpd_nome_txt' })
  nome: string;
  @Column({ nullable: false, name: 'dpd_data_nascimento_dte' })
  dpd_data_nascimento: Date;
  @Column({ name: 'dpd_email_txt' })
  dpd_email: string;
  @Column({ name: 'dpd_cpf_txt', length: 50 })
  dpd_cpf: string;
  /* RELACIONAMENTOS */
  @ManyToOne(type => Beneficiario, beneficiario => beneficiario.dependentes, { eager: false })
  @JoinColumn({ name: 'bnf_id_int' })
  beneficiario: Beneficiario;
}