import { Boleto } from "./boleto.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Boleto)
export class BoletoRepository extends Repository<Boleto>{ }