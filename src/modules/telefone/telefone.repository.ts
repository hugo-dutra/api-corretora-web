import { Repository, EntityRepository } from "typeorm";
import { Telefone } from "./telefone.entity";

@EntityRepository(Telefone)
export class TelefoneRepository extends Repository<Telefone>{

}