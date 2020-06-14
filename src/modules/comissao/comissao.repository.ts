import { Repository, EntityRepository } from "typeorm";
import { Comissao } from "./comissao.entity";

@EntityRepository(Comissao)
export class ComissaoRepository extends Repository<Comissao>{ }