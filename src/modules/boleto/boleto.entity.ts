import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Corretora } from "../corretora/corretora.entity";

@Entity('boleto_blt')
export class Boleto extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'blt_id_int' })
  id: number;
  @Column({ name: 'blt_valor_num' })
  valor: number;
  @Column({ name: 'blt_data_emissao_dte' })
  data_emissao: Date;
  @Column({ name: 'blt_data_vencimento_dte' })
  data_vencimento: Date;
  @Column({ name: 'cta_id_int' })
  cta_id: number;
  @ManyToOne(type => Corretora, corretora => corretora.boletos)
  corretora: Corretora;

}