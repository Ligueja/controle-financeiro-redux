import { combineReducers } from "@reduxjs/toolkit";
import { extratoReducer } from "./extrato/extratoSlice";
import { transacaoReducer } from "./transacoes/transacoesSlice";

export const rootReducer = combineReducers({
  transacao: transacaoReducer,
  extrato: extratoReducer,
});
