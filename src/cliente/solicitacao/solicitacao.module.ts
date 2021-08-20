import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SolicitacaoSchema } from 'src/cliente/schemas/solicitacao.schema';
import { SolicitacaoController } from './solicitacao.controller';
import { SolicitacaoService } from './solicitacao.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Solicitacao', schema: SolicitacaoSchema }])
  ],
  controllers: [SolicitacaoController],
  providers: [SolicitacaoService]

})
export class SolicitacaoModule { }
