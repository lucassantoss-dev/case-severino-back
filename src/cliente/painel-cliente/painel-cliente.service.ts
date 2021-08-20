import { Injectable } from '@nestjs/common';
import { Cliente } from './cliente';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class PainelClienteService {
    
    constructor(@InjectModel('Cliente') private readonly clienteModel: Model<Cliente>) {

    }

    async getAll() {
        return await this.clienteModel.find().exec();
    }

    async getById(id: string) {
        return await this.clienteModel.findById(id).exec();
    }

    async create(cliente: Cliente){
        const createdClient = new this.clienteModel(cliente);
        return await createdClient.save();
    }

    update(id: string, cliente: Cliente) {
        const index = this.clienteModel.updateOne({ _id: id }, cliente).exec();
        return this.getById(id);
    }

    async delete(id: string) {
        return await this.clienteModel.deleteOne({ _id: id }).exec()
    }
}


