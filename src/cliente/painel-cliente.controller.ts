import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { Cliente } from './painel-cliente/cliente';
import { PainelClienteService } from './painel-cliente/painel-cliente.service';
import { JwtAuthGuard } from 'src/auth/shared/jwt-auth.guard';

@Controller('painel-cliente')
export class PainelClienteController {

    constructor(
        private clienteService: PainelClienteService
    ) { }

    @Get()
    async getAll() : Promise<Cliente[]> {
        return this.clienteService.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id: string): Promise<Cliente> {
        return this.clienteService.getById(id);
    }

    @Post()
    async create(@Body() cliente: Cliente): Promise<Cliente> {
        return this.clienteService.create(cliente);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() cliente: Cliente): Promise<Cliente> {
        return this.clienteService.update(id, cliente);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        this.clienteService.delete(id);
    }
}
