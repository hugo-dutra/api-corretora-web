import { Dependente } from './dependente.entity';
import { Repository, EntityRepository } from "typeorm";

@EntityRepository(Dependente)
export class DependenteRepository extends Repository<Dependente>{

}