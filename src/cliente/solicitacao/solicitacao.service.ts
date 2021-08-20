import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Solicitacao } from './solicitacao';

@Injectable()
export class SolicitacaoService {
    
    constructor(@InjectModel('Solicitacao') private readonly solicitacaoModel: Model<Solicitacao>) {

    }

    async getAll() {
        return await this.solicitacaoModel.find().exec();
    }

    async getById(id: string) {
        return await this.solicitacaoModel.findById(id).exec();
    }

    async create(solicitacao: Solicitacao){
        const createdSolicitacao = new this.solicitacaoModel(solicitacao);
        return await createdSolicitacao.save();
    }

    update(id: string, solicitacao: Solicitacao) {
        const index = this.solicitacaoModel.updateOne({ _id: id }, solicitacao).exec();
        return this.getById(id);
    }

    async delete(id: string) {
        return await this.solicitacaoModel.deleteOne({ _id: id }).exec()
    }
}
