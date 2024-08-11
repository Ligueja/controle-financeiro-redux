import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Transacao } from "../../../configs/intafaces/transacao";
import { RootState } from "../..";

const initialState: Transacao = {
  descricao: "",
  valor: 0,
};

const transacaoSlice = createSlice({
  name: "transacao",
  initialState: initialState,
  reducers: {
    Descricao: (estadoAtual, action: PayloadAction<string>) => {
      estadoAtual.descricao = action.payload;
    },

    depositoValor: (estadoAtual, action: PayloadAction<number>) => {
      estadoAtual.valor += action.payload;
    },

    depositoSaque: (estadoAtual, action: PayloadAction<number>) => {
      estadoAtual.valor -= action.payload;
    },
  },
});

export const { Descricao, depositoSaque, depositoValor } =
  transacaoSlice.actions;

export const selectTransacao = (state: RootState) => state.transacao;

export const transacaoReducer = transacaoSlice.reducer;
