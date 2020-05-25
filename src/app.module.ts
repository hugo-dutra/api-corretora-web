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
import { ContratoModule } from './modules/contrato/contrato.module';
import { TipoContratoModule } from './modules/tipo-contrato/tipo-contrato.module';
import { ClasseContratoModule } from './modules/classe-contrato/classe-contrato.module';
import { ParcelaContratoModule } from './modules/parcela-contrato/parcela-contrato.module';
import { TipoPagamentoModule } from './modules/tipo-pagamento/tipo-pagamento.module';
import { PerfilPermissaoModule } from './modules/perfil-permissao/perfil-permissao.module';
import { AdministradoraModule } from './modules/administradora/administradora.module';
import { ComissaoModule } from './modules/comissao/comissao.module';
import { TipoComissaoModule } from './modules/tipo-comissao/tipo-comissao.module';
import { BoletoModule } from './modules/boleto/boleto.module';
import { SecurityModule } from './shared/security/security.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    ClienteModule,
    BeneficiarioModule,
    DependenteModule,
    TelefoneModule,
    ProprietarioTelefoneModule,
    UsuarioModule,
    PerfilModule,
    PermissaoModule,
    CorretoraModule,
    OperadoraModule,
    ModalidadePlanoModule,
    ContratoModule,
    TipoContratoModule,
    ClasseContratoModule,
    ParcelaContratoModule,
    TipoPagamentoModule,
    PerfilPermissaoModule,
    AdministradoraModule,
    ComissaoModule,
    TipoComissaoModule,
    BoletoModule,
    SecurityModule],
})
export class AppModule { }
