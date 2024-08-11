import { Transacao } from "./transacao";

export interface Extrato {
  transacoes: Transacao[];
  saldo: number;
}
