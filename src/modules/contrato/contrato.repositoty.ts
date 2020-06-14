import { EntityRepository, Repository } from "typeorm";
import { Contrato } from "./contrato.entity";

@EntityRepository(Contrato)
export class ContratoRepository extends Repository<Contrato>{ }