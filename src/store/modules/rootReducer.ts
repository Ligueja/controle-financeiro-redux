import { combineReducers } from "@reduxjs/toolkit";
import { extratoReducer } from "./extrato/extratoSlice";
import { transacaoReducer } from "./transacoes/transacoesSlice";

export const rootReducer = combineReducers({
  //abaixo colocar os reducers que tem no arquivo "index.ts"
  transacao: transacaoReducer,
  extrato: extratoReducer,
});
