import { Administradora } from './administradora.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Administradora)
export class AdministradoraRepository extends Repository<Administradora>{ }