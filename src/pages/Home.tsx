import {
  Alert,
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import {
  depositoSaque,
  depositoValor,
  Descricao,
  selectTransacao,
} from "../store/modules/transacoes/transacoesSlice";
import { adicionarTransacao } from "../store/modules/extrato/extratoSlice"; // Importe a ação do extrato
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useState } from "react";

export function Home() {
  const dispatch = useAppDispatch();
  const transacao = useAppSelector(selectTransacao);

  const [descricao, setDescricao] = useState("");
  const [valorDeposito, setValorDeposito] = useState<number | "">("");
  const [valorSaque, setValorSaque] = useState<number | "">("");
  const [erro, setErro] = useState<string | null>(null);

  //  função para disparar as transações preenchidas pelo usuário com verificação dos campos preenchidos. Não pode preencher ambos em um unico "submit" e também é obiratógio o preenchimento de pelo menos um campo.
  const handleTransacao = () => {
    if (valorDeposito !== "" && valorSaque !== "") {
      setErro("Por favor, preencha apenas um dos campos: Depósito ou Saque.");
      return;
    }

    if (descricao === "") {
      setErro("A descrição é obrigatória.");
      return;
    }

    dispatch(Descricao(descricao));

    let valor = 0;

    if (valorDeposito !== "") {
      valor = Number(valorDeposito);
      dispatch(depositoValor(valor));
    } else if (valorSaque !== "") {
      valor = -Number(valorSaque);
      dispatch(depositoSaque(-valor));
    }

    // Disparar a ação para adicionar a transação ao extrato
    dispatch(adicionarTransacao({ descricao, valor }));

    // Resetando os campos após a transação
    setDescricao("");
    setValorDeposito("");
    setValorSaque("");
    setErro(null); // Resetando a mensagem de erro
  };

  return (
    <Container maxWidth='sm'>
      <Box component='form' sx={{ mt: 4 }} noValidate autoComplete='off'>
        <Typography variant='h4' sx={{ mb: 4, textAlign: "center" }}>
          Controle Financeiro
        </Typography>

        <TextField
          label='Descrição'
          variant='outlined'
          fullWidth
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          sx={{ mb: 3 }}
        />

        <TextField
          label='Valor de Depósito'
          type='number'
          variant='outlined'
          fullWidth
          value={valorDeposito}
          onChange={(e) =>
            setValorDeposito(
              e.target.value === "" ? "" : Number(e.target.value)
            )
          }
          sx={{ mb: 3 }}
        />

        <TextField
          label='Valor de Saque'
          type='number'
          variant='outlined'
          fullWidth
          value={valorSaque}
          onChange={(e) =>
            setValorSaque(e.target.value === "" ? "" : Number(e.target.value))
          }
          sx={{ mb: 3 }}
        />

        {erro && (
          <Alert severity='error' sx={{ mb: 3 }}>
            {erro}
          </Alert>
        )}

        <Button
          variant='contained'
          color='primary'
          onClick={handleTransacao}
          sx={{ mt: 2 }}
        >
          Confirmar
        </Button>

        <Typography variant='h6' sx={{ mt: 4 }}>
          Saldo Atual: R${" "}
          {transacao.valor.toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </Typography>
      </Box>
    </Container>
  );
}
