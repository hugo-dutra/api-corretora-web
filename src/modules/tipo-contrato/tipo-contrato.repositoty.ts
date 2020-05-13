import { TipoContrato } from './tipo-contrato.entity';
import { Repository, EntityRepository } from "typeorm";

@EntityRepository(TipoContrato)
export class TipoContratoRepository extends Repository<TipoContrato>{ }