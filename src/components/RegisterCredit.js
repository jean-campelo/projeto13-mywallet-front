import styled from "styled-components";
import { Link } from "react-router-dom";
import { useContext } from "react";
import DataContext from "../context/dataContext.js";
import { postNewRegister } from "../services/my_wallet.js";
import { ThreeDots } from "react-loader-spinner";

export default function RegisterCredit() {
  const { register, setRegister, config, isDisabled, setIsDisabled } =
    useContext(DataContext);
  return (
    <Container>
      <Header>
        <h1>Nova entrada</h1>
        <Link to="/account">
          <ion-icon name="close-outline"></ion-icon>
        </Link>
      </Header>
      <Form onSubmit={sendForm}>
        <input
          placeholder="Valor"
          name="value"
          disabled={isDisabled}
          onChange={(e) => handleForm(e.target.name, e.target.value)}
        />
        <input
          placeholder="Descrição"
          name="description"
          disabled={isDisabled}
          onChange={(e) => handleForm(e.target.name, e.target.value)}
        />
        <button type="submit">
          {" "}
          {isDisabled ? (
            <ThreeDots color="#c453f4" height={40} width={40} />
          ) : (
            "Salvar entrada"
          )}{" "}
        </button>
      </Form>
    </Container>
  );

  function handleForm(name, value) {
    setRegister({
      ...register,
      [name]: value,
    });
  }

  function sendForm(e) {
    e.preventDefault();
    setIsDisabled(true);
    postNewRegister(register, config);
  }
}

const Container = styled.main`
  display: flex;
  height: 100vh;
  width: 100vw;
  align-items: center;
  background-color: var(--color-background);
  flex-direction: column;
  padding: 16px;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 90vw;
  margin-bottom: 46px;

  h1 {
    font-weight: 700;
    color: var(--color-white);
    font-size: 26px;
  }

  ion-icon {
    color: var(--color-white);
    font-size: 28px;
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
