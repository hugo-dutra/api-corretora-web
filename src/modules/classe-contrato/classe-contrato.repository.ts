import { ClasseContrato } from './classe-contrato.entity';
import { Repository, EntityRepository } from "typeorm";

@EntityRepository(ClasseContrato)
export class ClasseContratoRepository extends Repository<ClasseContrato>{ }