import { Gerenciadora } from "./gerenciadora.entity";
import { Repository, EntityRepository } from "typeorm";

@EntityRepository(Gerenciadora)
export class GerenciadoraRepositoty extends Repository<Gerenciadora>{

}