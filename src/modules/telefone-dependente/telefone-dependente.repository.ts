import { Repository, EntityRepository } from "typeorm";
import { TelefoneDependente } from "./telefone-dependente.entity";

@EntityRepository(TelefoneDependente)
export class TelefoneDependenteRepository extends Repository<TelefoneDependente>{ }