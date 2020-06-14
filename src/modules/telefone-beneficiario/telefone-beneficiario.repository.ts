import { TelefoneBeneficiario } from './telefone-beneficiario.entity';
import { Repository, EntityRepository } from "typeorm";
import { InjectRepository } from '@nestjs/typeorm';

@EntityRepository(TelefoneBeneficiario)
export class TelefoneBeneficiarioRepository extends Repository<TelefoneBeneficiario>{ }
