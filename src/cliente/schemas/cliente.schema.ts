import * as mongoose from 'mongoose';

export const ClienteSchema = new mongoose.Schema({
    nome: String,
    email: String,
    senha: String,
    ativo: Boolean
})