import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from './app.service';
import { PainelClienteModule } from './cliente/painel-cliente.module';
import { PainelAdminModule } from './administrativo/painel-admin/painel-admin.module';
import { SolicitacaoModule } from './cliente/solicitacao/solicitacao.module';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { ChatGateway } from './chat.gateway';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://db_case:UhMaqmP6MSDzjhKV@case.etue0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'),
    AuthModule,
    PainelClienteModule,
    PainelAdminModule,
    SolicitacaoModule, 
    UsersModule],
  controllers: [],
  providers: [AppService, ChatGateway],
})
export class AppModule { }
