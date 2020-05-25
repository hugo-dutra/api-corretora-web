import { CorretoraRepositoty } from './corretora.repositoty';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Corretora } from './corretora.entity';
import { CorretoraDto } from './dto/corretora.dto';
import { DeleteResult, UpdateResult } from 'typeorm';

@Injectable()
export class CorretoraService {
  constructor(@InjectRepository(CorretoraRepositoty) private corretoraRepository: CorretoraRepositoty) { }

  /**
   * Grava uma nova corretora
   * @param corretoraDto
   */
  public async inserirCorretora(corretoraDto: CorretoraDto): Promise<Corretora> {
    return new Promise((resolve, reject) => {
      const corretora = new Corretora();
      corretora.email = corretoraDto.email;
      corretora.nome = corretoraDto.nome;
      corretora.telefone = corretoraDto.telefone;
      corretora.save().then((corretora: Corretora) => {
        resolve(corretora);
      }).catch((reason: any) => {
        reject(reason)
      });
    });
  }

  /**
   * Recupera a corretora pelo Id
   * @param id Id da corretora
   */
  public listarDadosCorretoraPorId(id: number): Promise<Corretora> {
    return new Promise((resolve, reject) => {
      this.corretoraRepository.findOne(id).then((corretora: Corretora) => {
        resolve(corretora);
      }).catch((reason: any) => {
        reject(reason);
      });
    });
  }

  /**
   * Recupera todas as corretoras
   * @param id Id da corretora
   */
  public listarCorretoras(): Promise<Corretora[]> {
    return new Promise((resolve, reject) => {
      this.corretoraRepository.find().then((corretoras: Corretora[]) => {
        resolve(corretoras);
      }).catch((reason: any) => {
        reject(reason);
      });
    });
  }

  /**
   * Alterar os dados da corretora
   * @param id Id da corretora a ser alterada
   * @param corretoraDto Dados a serem alterados
   */
  public alterarCorretora(id: number, corretoraDto: CorretoraDto): Promise<Corretora> {
    return new Promise((resolve, reject) => {
      this.listarDadosCorretoraPorId(id).then((corretora: Corretora) => {
        const corretoraPorId = corretora;
        corretoraPorId.email = corretoraDto.email;
        corretoraPorId.nome = corretoraDto.nome;
        corretoraPorId.telefone = corretoraDto.telefone;
        corretoraPorId.save().then((corretora: Corretora) => {
          resolve(corretora);
        }).catch((reason: any) => {
          reject(reason);
        });
      });
    });
  }

  /**
   * Apaga a corretora de Id Informado
   * @param id Id da corretora selecionada
   */
  public apagarCorretora(id: number): Promise<DeleteResult> {
    return new Promise((resolve, reject) => {
      this.corretoraRepository.delete(id).then((deleteResult: DeleteResult) => {
        resolve(deleteResult);
      }).catch((reason: any) => {
        reject(reason);
      })
    })
  }

}
