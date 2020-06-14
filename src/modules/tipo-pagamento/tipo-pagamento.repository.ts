import { TipoPagamento } from './tipo-pagamento.entity';
import { Repository, EntityRepository } from "typeorm";

@EntityRepository(TipoPagamento)
export class TipoPagamentoRepository extends Repository<TipoPagamento>{ }