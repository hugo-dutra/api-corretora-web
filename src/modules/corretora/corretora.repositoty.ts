import { EntityRepository, Repository } from "typeorm";
import { Corretora } from "./corretora.entity";

@EntityRepository(Corretora)
export class CorretoraRepositoty extends Repository<Corretora>{ }