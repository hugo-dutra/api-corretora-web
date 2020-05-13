import { Repository, EntityRepository } from "typeorm";
import { ProprietarioTelefone } from "./proprietario-telefone.entity";

@EntityRepository(ProprietarioTelefone)
export class ProprietarioTelefoneRepository extends Repository<ProprietarioTelefone>{

}