import { Document } from "mongoose";
export class Solicitacao extends Document {
    descricao: string;
    cliente: string;
    usuario: string;
    dataAbertura: string;
    dataEncerramento: string;
    status: boolean;
    replicas: boolean;
}
