import { Repository, EntityRepository } from "typeorm";
import { TipoComissao } from "./tipo-comissao.entity";

@EntityRepository(TipoComissao)
export class TipoComissaoRepository extends Repository<TipoComissao>{ }