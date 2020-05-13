import { Repository, EntityRepository } from "typeorm";
import { ModalidadePlano } from "./modalidade-plano.entity";

@EntityRepository(ModalidadePlano)
export class ModalidadePlanoRepositoty extends Repository<ModalidadePlano>{ }