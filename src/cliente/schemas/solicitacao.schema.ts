import * as mongoose from 'mongoose';

export const SolicitacaoSchema = new mongoose.Schema({
    descricao: String,
    cliente: String,
    usuario: String,
    dataAbertura: String,
    dataEncerramento: String,
    status: Boolean,
    replicas: Boolean
})