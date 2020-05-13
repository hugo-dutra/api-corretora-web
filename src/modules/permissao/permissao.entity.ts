import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm";

@Entity()
export class Permissao extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 250, nullable: false })
  nome: string;
}