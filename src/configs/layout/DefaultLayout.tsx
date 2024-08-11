import { Stack } from "@mui/material";
import { Footer } from "../../components/functionals/Footer";
import { Navbar } from "../../components/functionals/NavBar";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <Stack spacing={2} alignItems='center'>
      <Navbar />
      {children}
      <Footer />
    </Stack>
  );
}

//o stack quando renderizado é a mesma coisa que renderizar uma Div com valor flex e flex direction coluna (collumn), o que não é o comportamernto padrão, pois o flex é em linha (row).
