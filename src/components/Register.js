import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import DataContext from "../context/dataContext.js";
import { postNewUser } from "../services/my_wallet.js";

export default function Register() {
  let navigate = useNavigate();
  const { body, setBody } = useContext(DataContext);
  return (
    <Main>
      <h1>MyWallet</h1>
      <Form onSubmit={sendForm}>
        <input
          placeholder="Nome"
          name="name"
          onChange={(e) => handleForm(e.target.name, e.target.value)}
        />
        <input
          placeholder="E-mail"
          name="email"
          onChange={(e) => handleForm(e.target.name, e.target.value)}
        />
        <input
          placeholder="Senha"
          name="password"
          onChange={(e) => handleForm(e.target.name, e.target.value)}
        />
        <input
          placeholder="Confirme a senha"
          name="confirmPassword"
          onChange={(e) => handleForm(e.target.name, e.target.value)}
        />
        <button type="submit"> Cadastrar </button>
      </Form>
      <Link to={"/"}>
        <h2>Já tem uma conta? Entre agora!</h2>
      </Link>
    </Main>
  );

  function handleForm(name, value) {
    setBody({
      ...body,
      [name]: value,
    });
  }

  function sendForm(e) {
    e.preventDefault();

    postNewUser(body)
      .then(() => navigate("/"))
      .catch((err) => alert(err.message));
  }
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
