import styled from "styled-components";

export default function Login() {
  return (
    <Main>
      <Form>
        <input placeholder="E-mail" name="email" />
        <input placeholder="Senha" name="password" />
      </Form>
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
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  input {
    width: 70vw;
    height: 45px;
    margin-bottom: 6px;
    font-family: Raleway;
    color: var(--color-black);
    border: 1px solid var(--color-background);
    border-radius: 5px;
    padding: 10px;
    font-size: 20px;
  }
`;
