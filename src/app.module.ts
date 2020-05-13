import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { ClienteModule } from './modules/cliente/cliente.module';
import { BeneficiarioModule } from './modules/beneficiario/beneficiario.module';
import { DependenteModule } from './modules/dependente/dependente.module';
import { TelefoneModule } from './modules/telefone/telefone.module';
import { ProprietarioTelefoneModule } from './modules/proprietario-telefone/proprietario-telefone.module';
import { UsuarioModule } from './modules/usuario/usuario.module';
import { PerfilModule } from './modules/perfil/perfil.module';
import { PermissaoModule } from './modules/permissao/permissao.module';
import { CorretoraModule } from './modules/corretora/corretora.module';
import { OperadoraModule } from './modules/operadora/operadora.module';
import { ModalidadePlanoModule } from './modules/modalidade-plano/modalidade-plano.module';
import { GerenciadoraModule } from './modules/gerenciadora/gerenciadora.module';
import { ContratoModule } from './modules/contrato/contrato.module';
import { TipoContratoModule } from './modules/tipo-contrato/tipo-contrato.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), ClienteModule, BeneficiarioModule, DependenteModule, TelefoneModule, ProprietarioTelefoneModule, UsuarioModule, PerfilModule, PermissaoModule, CorretoraModule, OperadoraModule, ModalidadePlanoModule, GerenciadoraModule, ContratoModule, TipoContratoModule],
})
export class AppModule { }
