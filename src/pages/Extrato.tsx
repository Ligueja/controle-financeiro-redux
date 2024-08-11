import { Container, Typography, Box } from "@mui/material";
import { useAppSelector } from "../store/hooks";
import { selectExtrato } from "../store/modules/extrato/extratoSlice";

export function Extrato() {
  const extrato = useAppSelector(selectExtrato);

  return (
    <Container
      maxWidth='sm'
      sx={{ backgroundColor: "#FFF8DC", padding: 2, borderRadius: 2 }}
    >
      <Typography variant='h4' align='center'>
        Extrato de Movimentações
      </Typography>

      {extrato.transacoes.map((transacao, index) => (
        <Box key={index} sx={{ padding: "8px 0" }}>
          <Typography
            variant='body1'
            sx={{ color: transacao.valor < 0 ? "red" : "black" }}
          >
            {transacao.descricao}: R${" "}
            {transacao.valor < 0
              ? `-${Math.abs(transacao.valor).toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}`
              : `${transacao.valor.toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}`}
          </Typography>
          <Box sx={{ borderBottom: "1px solid #ccc", marginTop: "8px" }} />
        </Box>
      ))}

      <Typography variant='h6' sx={{ marginTop: 1 }}>
        Saldo Atual: R${" "}
        {extrato.saldo.toLocaleString("pt-BR", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </Typography>
    </Container>
  );
}
