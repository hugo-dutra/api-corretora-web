import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn, ManyToOne } from "typeorm";
import { Dependente } from "../dependente/dependente.entity";

@Entity('telefone_dependente_tde')
export class TelefoneDependente {
  /* CAMPOS */
  @PrimaryGeneratedColumn({ name: 'tde_id_int' })
  id: number;
  @Column({ length: 25, nullable: false, name: 'tde_telefone_txt' })
  telefone: string;
  @Column({ nullable: false, name: 'tde_whatsapp_bin', default: false })
  whatsapp: Boolean;
  @Column({ name: 'tde_observacao_txt', nullable: true })
  observacao: string;
  @Column({ name: 'dpd_id_int' })
  dpd_id: number;
  /* RELACIONAMENTOS */
  @ManyToOne(type => Dependente, dependente => dependente.telefones)
  @JoinColumn({ name: 'dpd_id_int' })
  dependente: Dependente;

}