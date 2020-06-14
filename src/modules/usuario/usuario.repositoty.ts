import { Repository, EntityRepository } from "typeorm";
import { Usuario } from "./usuario.entity";

@EntityRepository(Usuario)
export class UsuarioRepositoty extends Repository<Usuario>{ }