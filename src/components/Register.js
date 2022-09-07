import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Register () {
  return (
    <Main>
      <h1>MyWallet</h1>
      <Form>
        <input placeholder="Nome" name="name" />
        <input placeholder="E-mail" name="email" />
        <input placeholder="Senha" name="password" />
        <input placeholder="Confirme a senha" name="confirmPassword" />
        <button> Cadastrar </button>
      </Form>
      <Link to={"/"}><h2>Já tem uma conta? Entre agora!</h2></Link>
    </Main>
  );
}

const Main = styled.main`
  display: flex;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
  background-color: var(--color-background);
  flex-direction: column;

  h1 {
    font-family: Saira Stencil One;
    color: var(--color-white);
    font-size: 32px;
    margin-bottom: 24px;
  }
  h2 {
    font-size: 15px;
    font-weight: 700;
    color: var(--color-white);
    margin-top: 26px;
    letter-spacing: 0.5px;
  }
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  input {
    width: 90vw;
    height: 45px;
    margin-bottom: 12px;
    color: var(--color-black);
    border: 1px solid var(--color-white);
    border-radius: 5px;
    padding: 10px;
    font-size: 20px;
  }
  button {
    width: 90vw;
    height: 45px;
    margin-bottom: 6px;
    color: var(--color-white);
    border: 1px solid var(--color-button);
    border-radius: 5px;
    padding: 10px;
    font-size: 20px;
    background-color: var(--color-button);
    font-weight: 700;
  }
`;
