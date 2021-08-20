import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { PainelClienteController } from './painel-cliente.controller';
import { PainelClienteService } from './painel-cliente/painel-cliente.service';
import { ClienteSchema } from './schemas/cliente.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Cliente', schema: ClienteSchema}])
    ],
    controllers: [PainelClienteController],
    providers: [PainelClienteService]
})
export class PainelClienteModule {}
