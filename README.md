# <b>PROGRAMA STARTER FULL STACK WEB - GROWDEV</b>

<b>Módulo: REACT III</b>

<b>ATIVIDADE - REDUX</b>

# Controle Financeiro

Este é um projeto de uma aplicação web para controle financeiro pessoal. A aplicação permite que o usuário registre transações financeiras, como depósitos e saques, e acompanhe o saldo atual. Além disso, todas as transações são exibidas em um extrato com a descrição e o valor, onde saques são destacados em vermelho.

<img src="https://github.com/Ligueja/controle-financeiro-redux/blob/main/src/images/tela1.jpg" width="700"/>

<img src="https://github.com/Ligueja/controle-financeiro-redux/blob/main/src/images/tela2.jpg" width="700"/>


## Tecnologias Utilizadas

- **React**
- **Redux Toolkit**
- **Redux Persist**
- **Material UI (MUI)**
- **TypeScript**

## Funcionalidades

- **Registro de Transações**: O usuário pode adicionar uma descrição e um valor para depósitos e saques. O saldo é atualizado automaticamente.
- **Visualização de Extrato**: As transações são listadas em uma página de extrato, onde saques são destacados em vermelho e depósitos em preto.
- **Persistência de Estado**: O estado das transações é gerenciado pelo Redux e salvo no `localStorage` utilizando o Redux Persist, garantindo que os dados permaneçam após recarregar a página.

## Como Executar o Projeto

1. Clone o repositório:

   ```bash
   git clone https://github.com/Ligueja/controle-financeiro-redux.git
   cd controle-financeiro-redux

2. Instale das dependências:
   ```bash
   npm install

3. Inicie o servidor:
   ```bash
   npm run dev
