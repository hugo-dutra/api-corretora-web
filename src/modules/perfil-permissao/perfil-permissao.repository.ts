import { PerfilPermissao } from './perfil-permissao.entity';
import { Repository, EntityRepository } from "typeorm";

@EntityRepository(PerfilPermissao)
export class PerfilPermissaoRepository extends Repository<PerfilPermissao>{ }