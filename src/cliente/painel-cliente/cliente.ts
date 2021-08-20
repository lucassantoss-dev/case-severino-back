import { Document } from "mongoose";

export class Cliente extends Document {
    nome: string;
    email: string;
    senha: string;
    ativo: boolean;
}
