import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Extrato } from "../../../configs/intafaces/extrato";
import { Transacao } from "../../../configs/intafaces/transacao";
import { RootState } from "../..";

const initialState: Extrato = {
  transacoes: [],
  saldo: 0,
};

const extratoSlice = createSlice({
  name: "extrato",
  initialState,
  reducers: {
    adicionarTransacao: (estadoInicial, action: PayloadAction<Transacao>) => {
      estadoInicial.transacoes.push(action.payload);
      estadoInicial.saldo += action.payload.valor;
    },
  },
});

export const { adicionarTransacao } = extratoSlice.actions;

export const selectExtrato = (state: RootState) => state.extrato;

export const extratoReducer = extratoSlice.reducer;
