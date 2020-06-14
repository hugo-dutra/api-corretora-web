import { Permissao } from "./permissao.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Permissao)
export class PermissaoRepositoty extends Repository<Permissao>{ }