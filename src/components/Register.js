import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import DataContext from "../context/dataContext.js";
import { postNewUser } from "../services/my_wallet.js";
import { ThreeDots } from "react-loader-spinner";

export default function Register() {
  let navigate = useNavigate();
  const { body, setBody, isDisabled, setIsDisabled } = useContext(DataContext);
  return (
    <Main>
      <h1>MyWallet</h1>
      <Form onSubmit={sendForm}>
        <input
          placeholder="Nome"
          name="name"
          disabled={isDisabled}
          onChange={(e) => handleForm(e.target.name, e.target.value)}
        />
        <input
          placeholder="E-mail"
          name="email"
          disabled={isDisabled}
          onChange={(e) => handleForm(e.target.name, e.target.value)}
        />
        <input
          placeholder="Senha"
          name="password"
          disabled={isDisabled}
          onChange={(e) => handleForm(e.target.name, e.target.value)}
        />
        <input
          placeholder="Confirme a senha"
          name="confirmPassword"
          disabled={isDisabled}
          onChange={(e) => handleForm(e.target.name, e.target.value)}
        />
        <button type="submit">
          {isDisabled ? (
            <ThreeDots color="#c453f4" height={40} width={40} />
          ) : (
            "Cadastrar"
          )}
        </button>
      </Form>
      <Link to={"/"}>
        <h2 onClick={()=>setBody({})}>Já tem uma conta? Entre agora!</h2>
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
    setIsDisabled(!isDisabled);
    validateNewUser(body);
    
    postNewUser(body)
      .then(() => navigate("/"))
      .catch((err) => {alert(err.response.data.message); setIsDisabled(false)});
  }

  function validateNewUser(body) {
    const { name, email, password, confirmPassword } = body;

    if (
      name === undefined ||
      email === undefined ||
      password === undefined ||
      confirmPassword === undefined
    ) {
      alert("Todos os campos devem ser preenchidos!!");
    }

    if (password !== confirmPassword) {
      alert("As senhas devem ser iguais");
    }
    setIsDisabled(false);
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

  input:disabled {
    background-color: #a74fca;
    color: #e9a8ff;
    border: var(--color-background);
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
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
