import styled from "styled-components";
import { Link } from "react-router-dom";

export default function RegisterCredit() {
  return (
    <Container>
      <Header>
        <h1>Nova entrada</h1>
        <Link to="/account">
          <ion-icon name="close-outline"></ion-icon>
        </Link>
      </Header>
      <Form>
        <input placeholder="Valor" name="value" />
        <input placeholder="Descrição" name="description" />
        <button> Salvar entrada </button>
      </Form>
    </Container>
  );
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
    letter-spacing: 0.5px;
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
