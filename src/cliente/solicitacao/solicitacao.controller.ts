import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/shared/jwt-auth.guard';
import { Solicitacao } from './solicitacao';
import { SolicitacaoService } from './solicitacao.service';

@Controller('solicitacao')
export class SolicitacaoController {
    constructor(
        private solicitacaoService: SolicitacaoService
    ) { }

    @Get()
    async getAll() : Promise<Solicitacao[]> {
        return this.solicitacaoService.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id: string): Promise<Solicitacao> {
        return this.solicitacaoService.getById(id);
    }

    @Post()
    async create(@Body() solicitacao: Solicitacao): Promise<Solicitacao> {
        return this.solicitacaoService.create(solicitacao);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() solicitacao: Solicitacao): Promise<Solicitacao> {
        return this.solicitacaoService.update(id, solicitacao);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        this.solicitacaoService.delete(id);
    }
}
