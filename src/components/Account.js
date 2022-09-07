import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Account() {
  return (
    <Container>
      <Header>
        <h1>Olá, userName</h1>
        <Link to={"/"}>
          <ion-icon name="log-out-outline"></ion-icon>
        </Link>
      </Header>

      <RegistersSection>
        <div>
          <h1>
            Não há registros de <br></br>entrada ou saída
          </h1>
        </div>
      </RegistersSection>

      <Buttons>
        <Link to="/registerCredit">
          <NewCredit>
            <ion-icon name="add-circle-outline"></ion-icon>
            <h1>
              Nova <br></br>entrada
            </h1>
          </NewCredit>
        </Link>

        <Link to="/registerDebit">
          <NewDebit>
            <ion-icon name="remove-circle-outline"></ion-icon>
            <h1>
              Nova <br></br>saída
            </h1>
          </NewDebit>
        </Link>
      </Buttons>
    </Container>
  );
}

const Container = styled.main`
  display: flex;
  align-items: center;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  background-color: var(--color-background);
  padding: 16px;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 90vw;

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

const RegistersSection = styled.div`
  background-color: var(--color-white);
  width: 90vw;
  height: 70vh;
  margin: 16px 0;
  border: 1px solid var(--color-white);
  border-radius: 5px;

  div {
    width: 90vw;
    height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h1 {
    color: #868686;
    text-align: center;
    line-height: 24px;
  }
`;

const Buttons = styled.section`
  width: 90vw;
  display: flex;
  justify-content: space-between;
`;

const NewDebit = styled.div`
  background-color: var(--color-button);
  width: 40vw;
  height: 16vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  border-radius: 5px;
  color: var(--color-white);
  font-size: 22px;
  line-height: 22px;

  h1 {
    font-weight: 700;
    font-size: 16px;
  }
`;

const NewCredit = styled.div`
  background-color: var(--color-button);
  width: 40vw;
  height: 16vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  border-radius: 5px;
  color: var(--color-white);
  font-size: 22px;
  line-height: 22px;

  h1 {
    font-weight: 700;
    font-size: 16px;
  }
`;
