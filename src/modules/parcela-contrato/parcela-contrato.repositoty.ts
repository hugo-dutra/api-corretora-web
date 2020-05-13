import { ParcelaContrato } from "./parcela-contrato.entity";
import { Repository, EntityRepository } from "typeorm";

@EntityRepository(ParcelaContrato)
export class ParcelaContratoRepository extends Repository<ParcelaContrato>{ }