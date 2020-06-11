import { Repository, EntityRepository } from "typeorm";
import { TelefoneCliente } from "./telefone-cliente.entity";

@EntityRepository(TelefoneCliente)
export class TelefoneClienteRepository extends Repository<TelefoneCliente>{

}