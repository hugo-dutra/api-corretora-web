import { Repository, EntityRepository } from "typeorm";
import { Operadora } from "./operadora.entity";

@EntityRepository(Operadora)
export class OperadoraRepository extends Repository<Operadora>{ }