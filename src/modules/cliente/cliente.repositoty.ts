import { Cliente } from './cliente.entity';
import { Repository, EntityRepository } from 'typeorm';

@EntityRepository(Cliente)
export class ClienteRepositoty extends Repository<Cliente>{

}