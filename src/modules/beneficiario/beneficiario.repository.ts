import { Beneficiario } from './beneficiario.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Beneficiario)
export class BeneficiarioRepository extends Repository<Beneficiario> {


}